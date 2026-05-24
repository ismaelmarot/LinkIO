import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiPlus, FiStar, FiMapPin, FiCalendar } from "react-icons/fi";
import { useEvents } from "./useEvents";
import {
  Container,
  Header,
  Title,
  CreateButton,
  List,
  EventCard,
  CardTop,
  EventPhoto,
  EventInfo,
  EventTitle,
  EventMeta,
  MetaItem,
  FavoriteBadge,
  EmptyState,
  TabContainer,
  TabButton,
  TabIndicator,
} from "./Events.styles";

export const Events = () => {
  const navigate = useNavigate();
  const {
    createdEvents,
    participatedEvents,
    trackedActivities,
    isLoading,
    error,
  } = useEvents();

  const [activeTab, setActiveTab] = useState<'created' | 'participated' | 'tracked'>('created');

  if (isLoading) {
    return <Container><Header><Title>Cargando...</Title></Header></Container>;
  }

  if (error) {
    return (
      <Container>
        <Header><Title>Error al cargar datos</Title></Header>
        <p>Inténtalo de nuevo más tarde.</p>
      </Container>
    );
  }

  const getTabItems = () => {
    switch (activeTab) {
      case 'created':
        return createdEvents.map((e) => ({
          ...e,
          type: 'event' as const,
        }));
      case 'participated':
        return participatedEvents.map((e) => ({
          ...e,
          type: 'event' as const,
        }));
      case 'tracked':
        return trackedActivities.map((a) => ({
          id: a.id,
          title: a.name,
          date: a.date,
          location: undefined,
          photoUrl: undefined,
          isFavorite: false,
          isTemplate: false,
          type: 'activity' as const,
        }));
    }
  };

  const items = getTabItems() ?? [];

  const getTabTitle = () => {
    switch (activeTab) {
      case 'created': return "Mis eventos";
      case 'participated': return "Eventos en los que participo";
      case 'tracked': return "Mis recorridos (GPS)";
    }
  };

  const getEmptyMessage = () => {
    switch (activeTab) {
      case 'created': return "No hay eventos creados aún. Creá tu primer evento!";
      case 'participated': return "Aún no participas en ningún evento.";
      case 'tracked': return "No tienes recorridos registrados aún.";
    }
  };

  const showCreateButton = activeTab === 'created';

  return (
    <Container>
      <Header>
        <Title>{getTabTitle()}</Title>
        {showCreateButton && (
          <CreateButton onClick={() => navigate("/events/new")}>
            <FiPlus size={20} />
          </CreateButton>
        )}
      </Header>

      <TabContainer>
        <TabButton
          $active={activeTab === 'created'}
          onClick={() => setActiveTab('created')}
        >
          Mis eventos
        </TabButton>
        <TabButton
          $active={activeTab === 'participated'}
          onClick={() => setActiveTab('participated')}
        >
          Participados
        </TabButton>
        <TabButton
          $active={activeTab === 'tracked'}
          onClick={() => setActiveTab('tracked')}
        >
          Mis recorridos
        </TabButton>
        <TabIndicator
          $activeTab={activeTab}
        />
      </TabContainer>

      {items.length === 0 ? (
        <EmptyState>{getEmptyMessage()}</EmptyState>
      ) : (
        <List>
          {items.map((item, _index) => (
            <EventCard
              key={item.id}
              onClick={() => {
                if (item.type === 'event') {
                  navigate(`/events/${item.id}`);
                }
                // For activities, we could navigate to activity detail if we had it
                // For now, do nothing or maybe show a toast
              }}
            >
              <CardTop>
                {item.photoUrl && (
                  <EventPhoto src={item.photoUrl} alt="" />
                )}
                <EventInfo>
                  <EventTitle>
                    {item.title}
                    {item.isFavorite && (
                      <FavoriteBadge>
                        <FiStar size={14} />
                      </FavoriteBadge>
                    )}
                  </EventTitle>
                  <EventMeta>
                    <MetaItem>
                      <FiCalendar size={14} />
                      {item.date}
                    </MetaItem>
                    {item.location && (
                      <MetaItem>
                        <FiMapPin size={14} />
                        {item.location}
                      </MetaItem>
                    )}
                  </EventMeta>
                </EventInfo>
              </CardTop>
            </EventCard>
          ))}
        </List>
      )}
    </Container>
  );
};
