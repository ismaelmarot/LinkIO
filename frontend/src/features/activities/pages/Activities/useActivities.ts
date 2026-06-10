import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/services/api'
import { db } from '@/lib/db'
import type { Activity } from '@/interface'

export const mapActivity = (a: any): Activity => ({
  id: a.id,
  name: a.sportType || a.name || "Salida",
  distance: a.distance ? `${Number(a.distance).toFixed(2)} km` : "0 km",
  duration: a.duration ? `${Math.floor(Number(a.duration) / 60)} min` : "0 min",
  date: new Date(a.startTime || a.timestamp).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }),
})

export const useActivities = () => {
  const queryClient = useQueryClient()
  
  const { data: activities = [] } = useQuery<Activity[]>({
    queryKey: ["activities"],
    queryFn: async () => {
      try {
        const { data } = await api.get("/activities")
        return data.map(mapActivity)
      } catch (err: any) {
        if (err.isNetworkError) {
          const local = await db.getAllActivities()
          return local.map(mapActivity)
        }
        throw err;
      }
    },
  })

  const deleteActivityMutation = useMutation({
    mutationFn: async (activityId: string) => {
      await api.delete(`/activities/${activityId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] })
      queryClient.invalidateQueries({ queryKey: ["dashboard"] })
      queryClient.invalidateQueries({ queryKey: ["profile-stats"] })
    },
  })

  return { 
    activities,
    deleteActivityMutation
  }
}