import { useNavigate } from "react-router-dom";
import { useProfile } from "./useProfile";
import {
  Container,
  Avatar,
  Name,
  Email,
  Username,
  Divider,
  Section,
  SectionTitle,
  StatGrid,
  StatCard,
  StatValue,
  StatLabel,
  LastActivityCard,
  LastActivityHeader,
  LastActivityName,
  LastActivityDate,
  LastActivityStats,
  LastActivityStat,
  HistoryButton,
} from "./Profile.styles";

export const Profile = () => {
  const { user, stats, lastActivity } = useProfile();
  const navigate = useNavigate();

  return (
    <Container>
      <Avatar>{user.name?.charAt(0)?.toUpperCase() || "?"}</Avatar>
      <Name>{user.name} {user.lastName}</Name>
      <Username>@{user.username}</Username>
      <Email>{user.email}</Email>

      <Divider />

      <Section>
        <SectionTitle>Estadísticas</SectionTitle>
        <StatGrid>
          <StatCard>
            <StatValue>{stats.totalOutings}</StatValue>
            <StatLabel>Salidas</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.totalDistance}</StatValue>
            <StatLabel>Distancia</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.totalEvents}</StatValue>
            <StatLabel>Eventos</StatLabel>
          </StatCard>
        </StatGrid>
      </Section>

      <Section>
        <SectionTitle>Última salida</SectionTitle>
        {lastActivity ? (
          <LastActivityCard onClick={() => navigate(`/activities/${lastActivity.id}`)}>
            <LastActivityHeader>
              <LastActivityName>{lastActivity.name}</LastActivityName>
              <LastActivityDate>{lastActivity.date}</LastActivityDate>
            </LastActivityHeader>
            <LastActivityStats>
              <LastActivityStat>{lastActivity.distance}</LastActivityStat>
              <LastActivityStat>{lastActivity.duration}</LastActivityStat>
            </LastActivityStats>
          </LastActivityCard>
        ) : (
          <LastActivityCard>Sin salidas aún</LastActivityCard>
        )}
      </Section>

      <HistoryButton onClick={() => navigate("/activities")}>
        Ver historial completo
      </HistoryButton>
    </Container>
  );
};
