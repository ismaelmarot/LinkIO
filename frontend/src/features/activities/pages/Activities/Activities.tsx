import { useActivities } from './useActivities'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Header,
  Title,
  List,
  ActivityCard,
  ActivityInfo,
  ActivityName,
  ActivityDate,
  Stats,
  Stat,
  StatValue,
  StatLabel,
  EmptyState,
} from './Activities.styles'

export const Activities = () => {
  const { activities, deleteActivityMutation } = useActivities()
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    setConfirmDeleteId(id);
  }

  const handleConfirmDelete = () => {
    if (confirmDeleteId) {
      deleteActivityMutation.mutate(confirmDeleteId)
      setConfirmDeleteId(null)
    }
  }

  const handleCancelDelete = () => {
    setConfirmDeleteId(null)
  }

  return (
    <Container>
      <Header>
        <Title>Historial de Salidas</Title>
      </Header>

      {activities.length === 0 ? (
        <EmptyState>No hay salidas registradas aún.</EmptyState>
      ) : (
        <List>
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              onClick={() => navigate(`/activities/${activity.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <ActivityInfo>
                <ActivityName>{activity.name}</ActivityName>
                <ActivityDate>{activity.date}</ActivityDate>
              </ActivityInfo>

              <Stats>
                <Stat>
                  <StatValue>{activity.distance}</StatValue>
                  <StatLabel>Distancia</StatLabel>
                </Stat>
                <Stat>
                  <StatValue>{activity.duration}</StatValue>
                  <StatLabel>Tiempo</StatLabel>
                </Stat>
              </Stats>

              {confirmDeleteId === activity.id ? (
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <button onClick={handleConfirmDelete} style={{ background: '#FFDE21', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}>
                    Eliminar
                  </button>
                  <button onClick={handleCancelDelete} style={{ background: '#6B6B6B', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}>
                    Cancelar
                  </button>
                </div>
              ) : (
                <button onClick={() => handleDelete(activity.id)} style={{ background: 'transparent', border: 'none', color: '#E74C3C', cursor: 'pointer', fontSize: '12px', padding: '4px' }}>
                  Eliminar
                </button>
              )}
            </ActivityCard>
          ))}
        </List>
      )}
    </Container>
  )
}