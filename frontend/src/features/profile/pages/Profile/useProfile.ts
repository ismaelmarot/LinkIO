import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../../store/authStore";
import api from "../../../../services/api";

interface ProfileStats {
  totalOutings: number;
  totalDistance: string;
  totalEvents: number;
}

interface LastActivity {
  id: string;
  name: string;
  distance: string;
  duration: string;
  date: string;
}

export const useProfile = () => {
  const user = useAuthStore((state) => state.user);

  const { data: stats } = useQuery<ProfileStats>({
    queryKey: ["profile-stats"],
    queryFn: async () => {
      const { data } = await api.get("/activities/stats");
      return data;
    },
    enabled: !!user,
  });

  const { data: lastActivity } = useQuery<LastActivity | null>({
    queryKey: ["last-activity"],
    queryFn: async () => {
      const { data } = await api.get("/activities?limit=1");
      const activity = data[0];
      if (!activity) return null;
      return {
        id: activity.id,
        name: activity.sportType || "Salida",
        distance: activity.distance ? `${activity.distance.toFixed(2)} km` : "0 km",
        duration: activity.duration ? `${Math.floor(activity.duration / 60)} min` : "0 min",
        date: new Date(activity.startTime).toLocaleDateString("es-AR", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };
    },
    enabled: !!user,
  });

  return {
    user: {
      name: user?.name?.split(" ")[0] || "Usuario",
      lastName: user?.name?.split(" ").slice(1).join(" ") || "",
      email: user?.email || "",
      username: user?.email?.split("@")[0] || "",
    },
    stats: stats || {
      totalOutings: 0,
      totalDistance: "0 km",
      totalEvents: 0,
    },
    lastActivity,
  };
};
