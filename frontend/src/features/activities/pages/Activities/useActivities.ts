import { useQuery } from "@tanstack/react-query";
import api from "../../../../services/api";

interface Activity {
  id: string;
  name: string;
  distance: string;
  duration: string;
  date: string;
}

export const useActivities = () => {
  const { data: activities = [] } = useQuery<Activity[]>({
    queryKey: ["activities"],
    queryFn: async () => {
      const { data } = await api.get("/activities");
      return data.map((a: any) => ({
        id: a.id,
        name: a.sportType || "Salida",
        distance: a.distance ? `${a.distance.toFixed(2)} km` : "0 km",
        duration: a.duration ? `${Math.floor(a.duration / 60)} min` : "0 min",
        date: new Date(a.startTime).toLocaleDateString("es-AR", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      }));
    },
  });

  return { activities };
};
