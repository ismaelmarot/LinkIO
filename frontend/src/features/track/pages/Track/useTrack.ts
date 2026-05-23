import { useState, useEffect, useRef, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useThemeMode } from "../../../../store/themeStore";
import { useTrackingStore } from "../../../../store/trackingStore";
import { useGeolocation } from "../../../../shared/hooks/useGeolocation";
import api from "../../../../services/api";
import { db } from "../../../../lib/db";
import { sync } from "../../../../lib/sync";

const TILES = {
  light:
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
};

const ATTRIBUTION =
  "&copy; <a href='https://www.openstreetmap.org/copyright'>OSM</a> &copy; <a href='https://carto.com/'>CARTO</a>";

const DEFAULT_CENTER: [number, number] = [-34.6037, -58.3816];

export const useTrack = () => {
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const polylineRef = useRef<L.Polyline | null>(null);
  const markerRef = useRef<L.CircleMarker | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const mode = useThemeMode((s) => s.mode);

  const status = useTrackingStore((s) => s.status);
  const path = useTrackingStore((s) => s.path);
  const metrics = useTrackingStore((s) => s.metrics);
  const startTracking = useTrackingStore((s) => s.startTracking);
  const pauseTracking = useTrackingStore((s) => s.pauseTracking);
  const resumeTracking = useTrackingStore((s) => s.resumeTracking);
  const stopTracking = useTrackingStore((s) => s.stopTracking);
  const addPoint = useTrackingStore((s) => s.addPoint);

  const { position, error, startWatching, stopWatching } = useGeolocation();

  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("track-map", {
      center: DEFAULT_CENTER,
      zoom: 13,
      zoomControl: false,
    });

    tileLayerRef.current = L.tileLayer(TILES[mode], {
      attribution: ATTRIBUTION,
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapRef.current = map;
    setMapReady(true);

    return () => {
      map.remove();
      mapRef.current = null;
      tileLayerRef.current = null;
      setMapReady(false);
    };
  }, []);

  useEffect(() => {
    if (!tileLayerRef.current) return;
    tileLayerRef.current.setUrl(TILES[mode]);
  }, [mode]);

  useEffect(() => {
    if (!mapRef.current || !mapReady) return;

    if (polylineRef.current) {
      polylineRef.current.remove();
    }

    if (path.length < 2) return;

    const latlngs = path.map((p) => [p.latitude, p.longitude] as [number, number]);
    polylineRef.current = L.polyline(latlngs, {
      color: "#FFDE21",
      weight: 4,
      opacity: 0.8,
    }).addTo(mapRef.current);
  }, [path.length, mapReady]);

  useEffect(() => {
    if (!mapRef.current || !mapReady) return;

    if (markerRef.current) {
      markerRef.current.remove();
    }

    if (!position) return;

    const { latitude, longitude } = position;
    markerRef.current = L.circleMarker([latitude, longitude], {
      radius: 8,
      fillColor: "#2ECC71",
      color: "#FFFFFF",
      weight: 2,
      fillOpacity: 1,
      className: "gps-marker",
    }).addTo(mapRef.current);

    if (status === "tracking") {
      mapRef.current.setView([latitude, longitude], mapRef.current.getZoom());
    }
  }, [position, status, mapReady]);

  useEffect(() => {
    startWatching();
    return () => stopWatching();
  }, [startWatching, stopWatching]);

  useEffect(() => {
    if (status !== "tracking" || !position) return;
    addPoint(position.latitude, position.longitude, position.altitude, position.speed);
  }, [position?.latitude, position?.longitude]);

  useEffect(() => {
    if (status === "idle") {
      setElapsed(0);
      return;
    }
    if (status !== "tracking") return;
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [status]);

  const handleStart = useCallback(() => {
    if (!position) return;
    startTracking(position.latitude, position.longitude, position.altitude);
  }, [position, startTracking]);

  const handlePause = useCallback(() => {
    pauseTracking();
  }, [pauseTracking]);

  const handleResume = useCallback(() => {
    if (!position) return;
    resumeTracking(position.latitude, position.longitude, position.altitude);
  }, [position, resumeTracking]);

  const handleStop = useCallback(async () => {
    const state = useTrackingStore.getState();
    const activity = {
      sportType: "running",
      startTime: new Date(state.startTime!).toISOString(),
      endTime: new Date().toISOString(),
      duration: Math.round(state.metrics.duration),
      distance: state.metrics.distance,
      avgSpeed: state.metrics.avgSpeed,
      maxSpeed: state.metrics.maxSpeed,
      points: state.path.map((p) => ({
        latitude: p.latitude,
        longitude: p.longitude,
        altitude: p.altitude,
        speed: p.speed,
        timestamp: new Date(p.timestamp).toISOString(),
      })),
    };

    stopTracking();

    if (navigator.onLine) {
      try {
        await api.post("/activities", activity);
      } catch {
        await db.saveActivity({
          ...activity,
          id: crypto.randomUUID(),
          status: "pending",
        });
        await sync.enqueue("/activities", "POST", activity);
      }
    } else {
      await db.saveActivity({
        ...activity,
        id: crypto.randomUUID(),
        status: "pending",
      });
      await sync.enqueue("/activities", "POST", activity);
    }

    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }
    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }
    if (mapRef.current) {
      mapRef.current.setView(DEFAULT_CENTER, 13);
    }
  }, [stopTracking]);

  const gpsQuality = (): "good" | "weak" | "lost" | "searching" => {
    if (error) return "lost";
    if (!position) return "searching";
    if (position.accuracy !== null && position.accuracy < 20) return "good";
    if (position.accuracy !== null && position.accuracy < 100) return "weak";
    return "weak";
  };

  return {
    status,
    metrics,
    elapsed,
    error,
    gpsQuality,
    position,
    mapReady,
    handleStart,
    handlePause,
    handleResume,
    handleStop,
  };
};
