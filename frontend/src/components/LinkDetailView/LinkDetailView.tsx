import React, { useState, useEffect } from 'react'
import { useI18n } from '../../app/i18n'
import { useNavigate, useParams } from 'react-router-dom'
import * as styles from './LinkDetailView.styles'
import * as Header from '../Header'
import { BackArrowIcon, EditIcon, TrashIcon, GlobeIcon, ExternalLinkIcon, CopyIcon, ChevronDownIcon } from '../../constants'

declare global {
  interface Window {
    electronAPI: {
      platform: string;
      links: {
        getAll: () => Promise<any[]>;
        get: (id: number) => Promise<any>;
        create: (data: any) => Promise<any>;
        update: (id: number, data: any) => Promise<any>;
        delete: (id: number) => Promise<boolean>;
      };
    };
  }
}

const api = () => window.electronAPI?.links;

const LinkDetailView: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { t } = useI18n()
  const [link, setLink] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const fetchLink = async () => {
      if (!id) {
        setError(t('detail.error'))
        setLoading(false)
        return;
      }
      
      try {
        const data = await api()?.get(parseInt(id));
        if (!data) {
          setError(t('detail.not_found'))
          return
        }
        setLink(data)
      } catch (err) {
        setError(t('detail.error'))
      } finally {
        setLoading(false)
      }
    }

    fetchLink()
  }, [id])

  const handleOpenLink = () => {
    if (link?.url) {
      window.open(link.url, '_blank')
    }
  }

  const handleCopyLink = async () => {
    if (link?.url) {
      try {
        await navigator.clipboard.writeText(link.url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Error copying:', err)
      }
    }
  }

  const handleEdit = () => {
    navigate(`/link/${id}/edit`)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await api()?.delete(parseInt(id!))
      navigate('/')
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setIsDeleting(false)
    }
  }

  const getTagStyle = (tag: any) => {
    if (typeof tag === 'string') {
      return { background: '#e3f2fd', color: '#1976d2', name: tag }
    }
    return { 
      background: tag.background || '#e3f2fd', 
      color: tag.color || '#1976d2', 
      name: tag.name || tag 
    }
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <styles.Container>
        <Header.HeaderContainer>
<Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          {t('detail.back')}
        </Header.BackButton>
        <Header.Title>{t('detail.link')}</Header.Title>
          <Header.Spacer />
        </Header.HeaderContainer>
        <styles.LoadingWrapper>
          <div className="spinner" />
          <p>{t('detail.loading')}</p>
        </styles.LoadingWrapper>
      </styles.Container>
    )
  }

  if (error || !link) {
    return (
      <styles.Container>
<Header.HeaderContainer>
        <Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          {t('detail.back')}
        </Header.BackButton>
        <Header.Title>{!link ? t('detail.error') : t('detail.link')}</Header.Title>
        <Header.Spacer />
      </Header.HeaderContainer>
        <styles.ErrorWrapper>
          <h2>{error || t('detail.not_found')}</h2>
          <p>{t('detail.not_exist')}</p>
          <styles.BackBtn onClick={() => navigate('/')}>
            {t('detail.back_home')}
          </styles.BackBtn>
        </styles.ErrorWrapper>
      </styles.Container>
    )
  }

  return (
    <styles.Container>
      <Header.HeaderContainer>
        <Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          {t('detail.back')}
        </Header.BackButton>
        <Header.Title>{t('detail.link')}</Header.Title>
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
                  <styles.CopyBtn onClick={handleCopyLink} title={t('detail.copy')}>
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
                <styles.SectionTitle>{t('detail.description')}</styles.SectionTitle>
                <styles.Text>{link.description}</styles.Text>
              </styles.Section>
            )}

            {link.note && (
              <styles.Section>
                <styles.SectionTitle>{t('detail.note')}</styles.SectionTitle>
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
                {t('detail.open')}
              </styles.ActionBtn>
              
              <styles.SecondaryActions $open={showMore}>
                <styles.SecondaryBtn onClick={handleEdit}>
                  <EditIcon />
                  {t('detail.edit')}
                </styles.SecondaryBtn>
                <styles.SecondaryBtn onClick={() => setShowDeleteModal(true)}>
                  <TrashIcon />
                  {t('detail.delete')}
                </styles.SecondaryBtn>
              </styles.SecondaryActions>
              
              <styles.MoreToggle onClick={() => setShowMore(!showMore)}>
                <span>{showMore ? t('detail.less_options') : t('detail.more_options')}</span>
                <ChevronDownIcon style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </styles.MoreToggle>
            </styles.ActionsWrapper>
          </styles.CardContent>
        </styles.LinkCard>
        
        {link.createdAt && (
          <styles.DateText>
            {t('detail.added_on')} {formatDate(link.createdAt)}
          </styles.DateText>
        )}
      </styles.Content>

      {showDeleteModal && (
        <styles.ModalBackdrop onClick={() => setShowDeleteModal(false)}>
          <styles.ModalContent onClick={(e) => e.stopPropagation()}>
            <styles.ModalTitle>{t('detail.delete_confirm')}</styles.ModalTitle>
            <styles.ModalText>{t('detail.delete_warning')}</styles.ModalText>
            <styles.ModalButtons>
              <styles.ModalCancelBtn onClick={() => setShowDeleteModal(false)}>
                {t('detail.cancel')}
              </styles.ModalCancelBtn>
              <styles.ModalDeleteBtn onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? t('detail.deleting') : t('detail.delete')}
              </styles.ModalDeleteBtn>
            </styles.ModalButtons>
          </styles.ModalContent>
        </styles.ModalBackdrop>
      )}
    </styles.Container>
  )
}

export default LinkDetailView