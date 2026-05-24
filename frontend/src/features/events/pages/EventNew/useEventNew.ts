import { useState, useEffect, useRef, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import api from "../../../../services/api";

interface EventForm {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  latitude: number | null;
  longitude: number | null;
  photoUrl: string;
  isTemplate: boolean;
  route: Array<{ latitude: number; longitude: number }> | null;
  isDrawing: boolean;
}

const NOMINATIM = "https://nominatim.openstreetmap.org/search";

export const useEventNew = () => {
  const navigate = useNavigate();
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const polylineRef = useRef<L.Polyline | null>(null);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [saving, setSaving] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);

  const [form, setForm] = useState<EventForm>({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    time: "08:00",
    location: "",
    latitude: null,
    longitude: null,
    photoUrl: "",
    isTemplate: false,
    route: null,
    isDrawing: false,
  });

  const goToLocation = (lat: number, lng: number) => {
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
    } else if (mapRef.current) {
      markerRef.current = L.marker([lat, lng], { draggable: true }).addTo(mapRef.current);
      markerRef.current.on("dragend", () => {
        const pos = markerRef.current!.getLatLng();
        setForm((f) => ({ ...f, latitude: pos.lat, longitude: pos.lng }));
      });
    }
    mapRef.current?.setView([lat, lng], 15);
    setForm((f) => ({ ...f, latitude: lat, longitude: lng }));
  };

  const toggleDrawingMode = () => {
    setForm((prev) => ({ ...prev, isDrawing: !prev.isDrawing }));
    if (!form.isDrawing) {
      // Enable drawing mode - clear existing route and prepare for new one
      setForm((prev) => ({ ...prev, route: [] }));
      if (polylineRef.current && mapRef.current) {
        polylineRef.current.remove();
        polylineRef.current = null;
      }
    } else {
      // Disable drawing mode - finalize the route
      if (polylineRef.current && mapRef.current && form.route) {
        if (polylineRef.current) {
          polylineRef.current.remove();
        }
        polylineRef.current = L.polyline(form.route, { color: '#FFDE21' }).addTo(mapRef.current);
      }
    }
  };

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("event-map", {
      center: [-34.6037, -58.3816],
      zoom: 13,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OSM",
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    map.on("click", (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;

      if (form.isDrawing) {
        // Add point to route when in drawing mode
        const newPoint = { latitude: lat, longitude: lng };
        setForm((prev) => ({
          ...prev,
          route: [...(prev.route || []), newPoint]
        }));

        // Update polyline to show the route
        if (polylineRef.current && mapRef.current) {
          polylineRef.current.remove();
        }
        polylineRef.current = L.polyline(form.route ? [...form.route, newPoint] : [newPoint], { color: '#FFDE21' }).addTo(mapRef.current);
      } else {
        // Normal marker placement mode
        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lng]);
        } else if (mapRef.current) {
          markerRef.current = L.marker([lat, lng], { draggable: true }).addTo(mapRef.current);
          markerRef.current.on("dragend", () => {
            const pos = markerRef.current!.getLatLng();
            setForm((f) => ({ ...f, latitude: pos.lat, longitude: pos.lng }));
          });
        }
        mapRef.current?.setView([lat, lng], 15);
        setForm((f) => ({ ...f, latitude: lat, longitude: lng }));
      }
    });

    mapRef.current = map;

    return () => {
      if (polylineRef.current) {
        polylineRef.current.remove();
      }
      if (markerRef.current) {
        markerRef.current.remove();
      }
      map.remove();
      mapRef.current = null;
    };
  }, [form.isDrawing, form.route]);

  const handleLocationChange = (value: string) => {
    setForm((f) => ({ ...f, location: value }));

    if (searchTimer.current) clearTimeout(searchTimer.current);

    if (!value.trim()) return;

    searchTimer.current = setTimeout(async () => {
      setSearching(true);
      try {
        const res = await fetch(
          `${NOMINATIM}?q=${encodeURIComponent(value)}&format=json&limit=1&countrycodes=ar`
        );
        const data = await res.json();
        if (data.length > 0) {
          goToLocation(Number(data[0].lat), Number(data[0].lon));
        }
      } catch {
        // geocode fallback
      } finally {
        setSearching(false);
      }
    }, 600);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPhotoPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setPhotoPreview(url);
      setForm((f) => ({ ...f, photoUrl: url }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.time) return;

    setSaving(true);
    try {
      const dateTime = new Date(`${form.date}T${form.time}`);

      await api.post("/events", {
        title: form.title,
        description: form.description,
        date: dateTime.toISOString(),
        location: form.location,
        latitude: form.latitude,
        longitude: form.longitude,
        photoUrl: form.photoUrl || undefined,
        isTemplate: form.isTemplate,
        privacy: "public",
      });

      navigate("/events");
    } catch {
      // fallback
    } finally {
      setSaving(false);
    }
  };

  return {
    form,
    setForm,
    handleLocationChange,
    searching,
    photoPreview,
    handlePhotoChange,
    handleSubmit,
    saving,
    toggleDrawingMode,
  };
};

  const toggleDrawingMode = () => {
    setForm((prev) => ({ ...prev, isDrawing: !prev.isDrawing }));
    if (!form.isDrawing) {
      // Enable drawing mode - clear existing route and prepare for new one
      setForm((prev) => ({ ...prev, route: [] }));
      if (polylineRef.current && mapRef.current) {
        polylineRef.current.remove();
        polylineRef.current = null;
      }
    } else {
      // Disable drawing mode - finalize the route
      if (polylineRef.current && mapRef.current && form.route) {
        if (polylineRef.current) {
          polylineRef.current.remove();
        }
        polylineRef.current = L.polyline(form.route, { color: '#FFDE21' }).addTo(mapRef.current);
      }
    }
  };

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("event-map", {
      center: [-34.6037, -58.3816],
      zoom: 13,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OSM",
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    map.on("click", (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;

      if (form.isDrawing) {
        // Add point to route when in drawing mode
        const newPoint = { latitude: lat, longitude: lng };
        setForm((prev) => ({
          ...prev,
          route: [...(prev.route || []), newPoint]
        }));

        // Update polyline to show the route
        if (polylineRef.current && mapRef.current) {
          polylineRef.current.remove();
        }
        polylineRef.current = L.polyline(form.route ? [...form.route, newPoint] : [newPoint], { color: '#FFDE21' }).addTo(mapRef.current);
      } else {
        // Normal marker placement mode
        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lng]);
        } else if (mapRef.current) {
          markerRef.current = L.marker([lat, lng], { draggable: true }).addTo(mapRef.current);
          markerRef.current.on("dragend", () => {
            const pos = markerRef.current!.getLatLng();
            setForm((f) => ({ ...f, latitude: pos.lat, longitude: pos.lng }));
          });
        }
        mapRef.current?.setView([lat, lng], 15);
        setForm((f) => ({ ...f, latitude: lat, longitude: lng }));
      }
    });

    mapRef.current = map;

    return () => {
      if (polylineRef.current) {
        polylineRef.current.remove();
      }
      if (markerRef.current) {
        markerRef.current.remove();
      }
      map.remove();
      mapRef.current = null;
    };
  }, [form.isDrawing, form.route]);

  const handleLocationChange = (value: string) => {
    setForm((f) => ({ ...f, location: value }));

    if (searchTimer.current) clearTimeout(searchTimer.current);

    if (!value.trim()) return;

    searchTimer.current = setTimeout(async () => {
      setSearching(true);
      try {
        const res = await fetch(
          `${NOMINATIM}?q=${encodeURIComponent(value)}&format=json&limit=1&countrycodes=ar`
        );
        const data = await res.json();
        if (data.length > 0) {
          goToLocation(Number(data[0].lat), Number(data[0].lon));
        }
      } catch {
        // geocode fallback
      } finally {
        setSearching(false);
      }
    }, 600);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPhotoPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setPhotoPreview(url);
      setForm((f) => ({ ...f, photoUrl: url }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.time) return;

    setSaving(true);
    try {
      const dateTime = new Date(`${form.date}T${form.time}`);

      await api.post("/events", {
        title: form.title,
        description: form.description,
        date: dateTime.toISOString(),
        location: form.location,
        latitude: form.latitude,
        longitude: form.longitude,
        photoUrl: form.photoUrl || undefined,
        isTemplate: form.isTemplate,
        privacy: "public",
      });

      navigate("/events");
    } catch {
      // fallback
    } finally {
      setSaving(false);
    }
  };

  return {
    form,
    setForm,
    handleLocationChange,
    searching,
    photoPreview,
    handlePhotoChange,
    handleSubmit,
    saving,
  };
};
