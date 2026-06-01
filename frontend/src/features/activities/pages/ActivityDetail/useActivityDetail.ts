import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";

interface ActivityDetailData {
  id: string;
  name: string;
  distance: string; // already formatted as "X.XX km"
  duration: string; // already formatted as "X min"
  date: string; // formatted date
  sportType: string;
  status: string;
  // We might want to include more details like avgSpeed, maxSpeed, etc.
  avgSpeed: number | null;
  maxSpeed: number | null;
  elevation: number | null;
  calories: number | null;
}

export const useActivityDetail = (id: string) => {
  const navigate = useNavigate();
  const [activity, setActivity] = useState<ActivityDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchActivity = useCallback(async () => {
    try {
      const { data } = await api.get(`/activities/${id}`);
      // Map the raw activity data to our display format
      const formattedActivity: ActivityDetailData = {
        id: data.id,
        name: data.sportType || "Salida",
        distance: data.distance ? `${Number(data.distance).toFixed(2)} km` : "0 km",
        duration: data.duration ? `${Math.floor(Number(data.duration) / 60)} min` : "0 min",
        date: new Date(data.startTime || data.timestamp).toLocaleDateString("es-AR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        sportType: data.sportType || "Desconocido",
        status: data.status || "unknown",
        avgSpeed: data.avgSpeed,
        maxSpeed: data.maxSpeed,
        elevation: data.elevation,
        calories: data.calories,
      };
      setActivity(formattedActivity);
    } catch (err) {
      console.error("Error fetching activity detail:", err);
      navigate("/activities");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  return { activity, loading };
};