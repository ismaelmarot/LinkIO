import { useDashboard } from "./useDashboard";
import {
  Container,
  Header,
  Title,
  Grid,
  Card,
  CardLabel,
  CardValue,
  Section,
  SectionTitle,
  ActivityItem,
  ActivityName,
  ActivityMeta,
  EmptyState,
} from "./Dashboard.styles";

export const Dashboard = () => {
  const { stats, recentActivities } = useDashboard();

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
      </Header>

      <Grid>
        <Card>
          <CardLabel>Weekly Distance</CardLabel>
          <CardValue>{stats.weeklyDistance}</CardValue>
        </Card>
        <Card>
          <CardLabel>Total Duration</CardLabel>
          <CardValue>{stats.totalDuration}</CardValue>
        </Card>
        <Card>
          <CardLabel>Activities</CardLabel>
          <CardValue>{stats.totalActivities}</CardValue>
        </Card>
        <Card>
          <CardLabel>This Week</CardLabel>
          <CardValue>{stats.thisWeek}</CardValue>
        </Card>
      </Grid>

      <Section>
        <SectionTitle>Recent Activities</SectionTitle>
        {recentActivities.length === 0 ? (
          <EmptyState>
            No activities yet. Start your first tracking session!
          </EmptyState>
        ) : (
          recentActivities.map((activity) => (
            <ActivityItem key={activity.id}>
              <ActivityName>{activity.sportType}</ActivityName>
              <ActivityMeta>
                {activity.distance} &middot; {activity.duration}
              </ActivityMeta>
            </ActivityItem>
          ))
        )}
      </Section>
    </Container>
  );
};
