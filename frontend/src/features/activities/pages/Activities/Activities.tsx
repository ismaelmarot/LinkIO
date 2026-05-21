import { useActivities } from "./useActivities";
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
} from "./Activities.styles";

export const Activities = () => {
  const { activities } = useActivities();

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
            <ActivityCard key={activity.id}>
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
            </ActivityCard>
          ))}
        </List>
      )}
    </Container>
  );
};
