import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiStar, FiCopy, FiMapPin, FiCalendar } from 'react-icons/fi'
import { useEventDetail } from './useEventDetail'
import {
  Container,
  TopBar,
  BackButton,
  Photo,
  Title,
  Description,
  MetaList,
  MetaItem,
  FavoriteButton,
  DuplicateButton,
  LoadingState,
} from './EventDetail.styles'

export const EventDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { event, loading, toggleFavorite, duplicateEvent } = useEventDetail(id!)

  if (loading || !event) {
    return <LoadingState>Cargando...</LoadingState>
  }

  return (
    <Container>
      <TopBar>
        <BackButton onClick={() => navigate('/events')}>
          <FiArrowLeft size={22} />
        </BackButton>
        <div style={{ display: 'flex', gap: 8 }}>
          <FavoriteButton
            $active={event.isFavorite}
            onClick={toggleFavorite}
          >
            <FiStar size={20} />
          </FavoriteButton>
          <DuplicateButton onClick={duplicateEvent}>
            <FiCopy size={20} />
          </DuplicateButton>
        </div>
      </TopBar>

      {event.photoUrl && <Photo src={event.photoUrl} alt="" />}

      <Title>{event.title}</Title>
      {event.description && <Description>{event.description}</Description>}

      <MetaList>
        <MetaItem>
          <FiCalendar size={16} />
          {event.date}
        </MetaItem>
        {event.location && (
          <MetaItem>
            <FiMapPin size={16} />
            {event.location}
          </MetaItem>
        )}
      </MetaList>
    </Container>
  )
}