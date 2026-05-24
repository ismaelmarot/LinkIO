import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";

interface EventDetailData {
  id: string;
  title: string;
  description?: string;
  date: string;
  location?: string;
  photoUrl?: string;
  isFavorite: boolean;
}

export const useEventDetail = (id: string) => {
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchEvent = useCallback(async () => {
    try {
      const { data } = await api.get(`/events/${id}`);
      setEvent({
        id: data.id,
        title: data.title,
        description: data.description,
        date: new Date(data.date).toLocaleDateString("es-AR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        location: data.location,
        photoUrl: data.photoUrl,
        isFavorite: data.isFavorite,
      });
    } catch {
      navigate("/events");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  const toggleFavorite = async () => {
    try {
      const { data } = await api.post(`/events/${id}/favorite`);
      setEvent((prev) => (prev ? { ...prev, isFavorite: data.isFavorite } : prev));
    } catch {}
  };

  const duplicateEvent = async () => {
    try {
      const { data } = await api.post(`/events/${id}/duplicate`);
      navigate(`/events/${data.id}`);
    } catch {}
  };

  return { event, loading, toggleFavorite, duplicateEvent };
};
