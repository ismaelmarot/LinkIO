import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as styles from './LinkDetailView.styles';
import * as Header from '../Header';
import { BackArrowIcon, EditIcon, TrashIcon, GlobeIcon, ExternalLinkIcon, CopyIcon, ChevronDownIcon } from '../../constants/icons.constants';

const API_URL = 'http://localhost:3001/api/links';

const LinkDetailView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [link, setLink] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchLink = async () => {
      if (!id) {
        setError('ID no proporcionado');
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          setError('Enlace no encontrado');
          return;
        }
        const data = await response.json();
        setLink(data);
      } catch (err) {
        setError('Error al cargar');
      } finally {
        setLoading(false);
      }
    };

    fetchLink();
  }, [id]);

  const handleOpenLink = () => {
    if (link?.url) {
      window.open(link.url, '_blank');
    }
  };

  const handleCopyLink = async () => {
    if (link?.url) {
      try {
        await navigator.clipboard.writeText(link.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Error copying:', err);
      }
    }
  };

  const handleEdit = () => {
    navigate(`/link/${id}/edit`);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      navigate('/');
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  const getTagStyle = (tag: any) => {
    if (typeof tag === 'string') {
      return { background: '#e3f2fd', color: '#1976d2', name: tag };
    }
    return { 
      background: tag.background || '#e3f2fd', 
      color: tag.color || '#1976d2', 
      name: tag.name || tag 
    };
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <styles.Container>
        <Header.HeaderContainer>
          <Header.BackButton onClick={() => navigate('/')}>
            <BackArrowIcon size={20} />
            Atrás
          </Header.BackButton>
          <Header.Title>Enlace</Header.Title>
          <Header.Spacer />
        </Header.HeaderContainer>
        <styles.LoadingWrapper>
          <div className="spinner" />
          <p>Cargando...</p>
        </styles.LoadingWrapper>
      </styles.Container>
    );
  }

  if (error || !link) {
    return (
      <styles.Container>
        <Header.HeaderContainer>
          <Header.BackButton onClick={() => navigate('/')}>
            <BackArrowIcon size={20} />
            Atrás
          </Header.BackButton>
          <Header.Title>Error</Header.Title>
          <Header.Spacer />
        </Header.HeaderContainer>
        <styles.ErrorWrapper>
          <h2>{error || 'No encontrado'}</h2>
          <p>El enlace no existe o fue eliminado.</p>
          <styles.BackBtn onClick={() => navigate('/')}>
            Volver al inicio
          </styles.BackBtn>
        </styles.ErrorWrapper>
      </styles.Container>
    );
  }

  return (
    <styles.Container>
      <Header.HeaderContainer>
        <Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          Atrás
        </Header.BackButton>
        <Header.Title>Enlace</Header.Title>
        <Header.Spacer />
      </Header.HeaderContainer>
      
      <styles.Content>
        <styles.LinkCard>
          {link.imageUrl ? (
            <styles.HeroImage>
              <img src={link.imageUrl} alt={link.title} />
            </styles.HeroImage>
          ) : (
            <styles.HeroPlaceholder>
              <GlobeIcon />
            </styles.HeroPlaceholder>
          )}
          
          <styles.CardContent>
            <styles.Header>
              {link.iconUrl ? (
                <styles.Favicon $hasImage={true}>
                  <img src={link.iconUrl} alt="Icono" />
                </styles.Favicon>
              ) : (
                <styles.Favicon>
                  <GlobeIcon />
                </styles.Favicon>
              )}
              <styles.TitleWrapper>
                <styles.Title>{link.title}</styles.Title>
                <styles.URLWrapper>
                  <styles.URL 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleOpenLink(); }}
                  >
                    {link.url}
                  </styles.URL>
                  <styles.CopyBtn onClick={handleCopyLink} title="Copiar">
                    <CopyIcon size={copied ? 16 : 16} />
                  </styles.CopyBtn>
                </styles.URLWrapper>
              </styles.TitleWrapper>
            </styles.Header>

            {link.subtitle && (
              <styles.Section>
                <styles.Text>{link.subtitle}</styles.Text>
              </styles.Section>
            )}

            <styles.Divider />

            {link.description && (
              <styles.Section>
                <styles.SectionTitle>Descripción</styles.SectionTitle>
                <styles.Text>{link.description}</styles.Text>
              </styles.Section>
            )}

            {link.note && (
              <styles.Section>
                <styles.SectionTitle>Nota</styles.SectionTitle>
                <styles.NoteBox>
                  <p>{link.note}</p>
                </styles.NoteBox>
              </styles.Section>
            )}

            {link.tags && link.tags.length > 0 && (
              <styles.Section>
                <styles.TagsWrapper>
                  {link.tags.map((tag: any, index: number) => {
                    const tagStyle = getTagStyle(tag);
                    return (
                      <styles.Tag key={index} $bg={tagStyle.background} $color={tagStyle.color}>
                        {tagStyle.name}
                      </styles.Tag>
                    );
                  })}
                </styles.TagsWrapper>
              </styles.Section>
            )}

            <styles.Divider />

            <styles.ActionsWrapper>
              <styles.ActionBtn $variant="primary" onClick={handleOpenLink}>
                <ExternalLinkIcon />
                Abrir enlace
              </styles.ActionBtn>
              
              <styles.SecondaryActions $open={showMore}>
                <styles.SecondaryBtn onClick={handleEdit}>
                  <EditIcon />
                  Editar
                </styles.SecondaryBtn>
                <styles.SecondaryBtn onClick={() => setShowDeleteModal(true)}>
                  <TrashIcon />
                  Eliminar
                </styles.SecondaryBtn>
              </styles.SecondaryActions>
              
              <styles.MoreToggle onClick={() => setShowMore(!showMore)}>
                <span>{showMore ? 'Menos opciones' : 'Más opciones'}</span>
                <ChevronDownIcon style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </styles.MoreToggle>
            </styles.ActionsWrapper>
          </styles.CardContent>
        </styles.LinkCard>
        
        {link.createdAt && (
          <styles.DateText>
            Agregado el {formatDate(link.createdAt)}
          </styles.DateText>
        )}
      </styles.Content>

      {showDeleteModal && (
        <styles.ModalBackdrop onClick={() => setShowDeleteModal(false)}>
          <styles.ModalContent onClick={(e) => e.stopPropagation()}>
            <styles.ModalTitle>¿Eliminar enlace?</styles.ModalTitle>
            <styles.ModalText>Esta acción no se puede deshacer.</styles.ModalText>
            <styles.ModalButtons>
              <styles.ModalCancelBtn onClick={() => setShowDeleteModal(false)}>
                Cancelar
              </styles.ModalCancelBtn>
              <styles.ModalDeleteBtn onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? 'Eliminando...' : 'Eliminar'}
              </styles.ModalDeleteBtn>
            </styles.ModalButtons>
          </styles.ModalContent>
        </styles.ModalBackdrop>
      )}
    </styles.Container>
  );
};

export default LinkDetailView;