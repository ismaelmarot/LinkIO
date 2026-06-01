import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiMapPin, FiTrendingUp, FiActivity } from 'react-icons/fi'
import { useActivityDetail } from './useActivityDetail'
import {
  Container,
  TopBar,
  BackButton,
  Title,
  MetaList,
  MetaItem,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  LoadingState,
} from './ActivityDetail.styles'

export const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { activity, loading } = useActivityDetail(id!)

  if (loading || !activity) {
    return <LoadingState>Cargando detalles de la actividad...</LoadingState>
  }

  return (
    <Container>
      <TopBar>
        <BackButton onClick={() => navigate("/activities")}>
          <FiArrowLeft size={22} />
        </BackButton>
        <Title>{activity.name}</Title>
      </TopBar>

      <MetaList>
        <MetaItem>
          <FiClock size={16} />
          {activity.date}
        </MetaItem>
      </MetaList>

      <StatsGrid>
        <StatCard>
          <StatValue>{activity.distance}</StatValue>
          <StatLabel>Distancia</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{activity.duration}</StatValue>
          <StatLabel>Tiempo</StatLabel>
        </StatCard>
        {activity.avgSpeed !== null && (
          <StatCard>
            <StatValue>{activity.avgSpeed.toFixed(1)} km/h</StatValue>
            <StatLabel>Velocidad Promedio</StatLabel>
          </StatCard>
        )}
        {activity.maxSpeed !== null && (
          <StatCard>
            <StatValue>{activity.maxSpeed.toFixed(1)} km/h</StatValue>
            <StatLabel>Velocidad Máxima</StatLabel>
          </StatCard>
        )}
        {activity.elevation !== null && (
          <StatCard>
            <StatValue>{activity.elevation} m</StatValue>
            <StatLabel>Ganancia de Elevación</StatLabel>
          </StatCard>
        )}
        {activity.calories !== null && (
          <StatCard>
            <StatValue>{activity.calories} cal</StatValue>
            <StatLabel>Calorías Quemadas</StatLabel>
          </StatCard>
        )}
      </StatsGrid>
    </Container>
  )
}