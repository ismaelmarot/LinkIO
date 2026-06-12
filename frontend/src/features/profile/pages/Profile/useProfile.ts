import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '@/store/authStore'
import api from '@/services/api'
import { db } from '@/lib/db'
import type { LastActivity, ProfileStats } from '@/interface'
 
export const useProfile = () => {
  const user = useAuthStore((state) => state.user)

  const { data: stats } = useQuery<ProfileStats>({
    queryKey: ["profile-stats"],
    queryFn: async () => {
      try {
        const { data } = await api.get("/activities/stats")
        return data
      } catch (err: any) {
        if (err.isNetworkError) {
          const local = await db.getAllActivities()
          const totalOutings = local.length;
          const totalDistance = local.reduce(
            (sum: number, a: any) => sum + (Number(a.distance) || 0),
            0
          );
          return {
            totalOutings,
            totalDistance: `${totalDistance.toFixed(2)} km`,
            totalEvents: 0,
          };
        }
        throw err;
      }
    },
    enabled: !!user,
  });

  const { data: lastActivity } = useQuery<LastActivity | null>({
    queryKey: ["last-activity"],
    queryFn: async () => {
      try {
        const { data } = await api.get("/activities?limit=1")
        const activity = data[0]
        if (!activity) return null
        return {
          id: activity.id,
          name: activity.sportType || "Salida",
          distance: activity.distance
            ? `${activity.distance.toFixed(2)} km`
            : "0 km",
          duration: activity.duration
            ? `${Math.floor(activity.duration / 60)} min`
            : "0 min",
          date: new Date(activity.startTime).toLocaleDateString("es-AR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        }
      } catch (err: any) {
        if (err.isNetworkError) {
          const local = await db.getAllActivities()
          const last = local[local.length - 1]
          if (!last) return null
          return {
            id: last.id,
            name: last.sportType || last.name || "Salida",
            distance: last.distance
              ? `${Number(last.distance).toFixed(2)} km`
              : "0 km",
            duration: last.duration
              ? `${Math.floor(Number(last.duration) / 60)} min`
              : "0 min",
            date: new Date(last.startTime || last.timestamp).toLocaleDateString(
              "es-AR",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            ),
          };
        }
        throw err;
      }
    },
    enabled: !!user,
  })

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
  }
}