import { useQuery } from '@tanstack/react-query'
import api from '../../../../services/api'
import type { DashboardStats, RawActivity } from '../../../../interface'
import { mapActivity } from '../../../activities/pages/Activities/useActivities'

export const useDashboard = () => {
  const { data: rawActivities = [] } = useQuery<RawActivity[]>({
    queryKey: ["activities"],
    queryFn: async () => {
      const { data } = await api.get("/activities")
      return data;
    },
  })

  const activities = rawActivities.map(mapActivity)

  // Calculate stats from raw data for better accuracy
  const totalDurationSeconds = rawActivities.reduce((sum, activity) => sum + (activity.duration || 0), 0)
  
  // Calculate weekly distance (last 7 days)
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const weeklyDistanceMeters = rawActivities
    .filter(activity => {
      const activityDate = new Date(activity.startTime || activity.timestamp || 0)
      return activityDate >= sevenDaysAgo
    })
    .reduce((sum, activity) => sum + (activity.distance || 0), 0)

  const stats: DashboardStats = {
    weeklyDistance: `${(weeklyDistanceMeters / 1000).toFixed(2)} km`,
    totalDuration: `${Math.floor(totalDurationSeconds / 60)} min`,
    totalActivities: activities.length,
    thisWeek: rawActivities.filter(activity => {
      const activityDate = new Date(activity.startTime || activity.timestamp || 0)
      return activityDate >= sevenDaysAgo
    }).length,
  }

  const recentActivities = activities.slice(0, 5)

  return { stats, recentActivities }
}