import { useQuery } from "@tanstack/react-query";
import api from "../../../../services/api";

interface Activity {
  id: string;
  sportType: string;
  distance: string;
  duration: string;
  startTime: string;
}

interface DashboardStats {
  weeklyDistance: string;
  totalDuration: string;
  totalActivities: number;
  thisWeek: number;
}

export const useDashboard = () => {
  const { data: activities = [] } = useQuery<Activity[]>({
    queryKey: ["activities"],
    queryFn: async () => {
      const { data } = await api.get("/activities");
      return data;
    },
  });

  const stats: DashboardStats = {
    weeklyDistance: "0 km",
    totalDuration: "0 h",
    totalActivities: activities.length,
    thisWeek: 0,
  };

  const recentActivities = activities.slice(0, 5);

  return { stats, recentActivities };
};
