import { useQuery } from "@tanstack/react-query";
import api from "../../../../services/api";
import { useAuthStore } from "../../../../store/authStore";

interface RawEvent {
  id: string;
  title: string;
  date: string;
  location?: string;
  photoUrl?: string;
  isFavorite: boolean;
  isTemplate: boolean;
  userId: string;
  participants: Array<{ userId: string }>;
}

interface EventItem {
  id: string;
  title: string;
  date: string;
  location?: string;
  photoUrl?: string;
  isFavorite: boolean;
  isTemplate: boolean;
}

interface ActivityItem {
  id: string;
  name: string;
  distance: string;
  duration: string;
  date: string;
}

const mapRawEventToItem = (e: RawEvent): EventItem => ({
  id: e.id,
  title: e.title,
  date: new Date(e.date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }),
  location: e.location,
  photoUrl: e.photoUrl,
  isFavorite: e.isFavorite,
  isTemplate: e.isTemplate,
});

const mapActivity = (a: any): ActivityItem => ({
  id: a.id,
  name: a.sportType || a.name || "Salida",
  distance: a.distance ? `${Number(a.distance).toFixed(2)} km` : "0 km",
  duration: a.duration ? `${Math.floor(Number(a.duration) / 60)} min` : "0 min",
  date: new Date(a.startTime || a.timestamp).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }),
});

export const useEvents = () => {
  const userId = useAuthStore((s) => s.user?.id);

  const { data: rawEvents = [], isLoading: eventsLoading, error: eventsError } = useQuery<RawEvent[]>({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await api.get("/events");
      return data;
    },
    enabled: !!userId,
  });

  const { data: rawActivities = [], isLoading: activitiesLoading, error: activitiesError } = useQuery<any[]>({
    queryKey: ["activities"],
    queryFn: async () => {
      const { data } = await api.get("/activities");
      return data;
    },
    enabled: !!userId,
  });

  const isLoading = eventsLoading || activitiesLoading;
  const error = eventsError || activitiesError;

  const createdEvents: EventItem[] = rawEvents
    .filter((e) => e.userId === userId)
    .map(mapRawEventToItem);

  const participatedEvents: EventItem[] = rawEvents
    .filter((e) => e.participants.some((p) => p.userId === userId))
    .map(mapRawEventToItem);

  const trackedActivities: ActivityItem[] = rawActivities.map(mapActivity);

  return {
    createdEvents,
    participatedEvents,
    trackedActivities,
    isLoading,
    error,
  };
};
