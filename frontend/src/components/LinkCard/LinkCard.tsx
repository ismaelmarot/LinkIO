import { useNavigate } from 'react-router-dom'
import { useI18n } from '../../app/i18n'
import type { LinkCardProps, Tag } from '../../interface'
import { WebsiteIcon, ArrowIcon } from '../../constants'
import { useLinkCard } from './useLinkCard'
import * as styles from './LinkCard.styles'

const LinkCard: React.FC<LinkCardProps> = ({
  imageUrl,
  title,
  url,
  iconUrl,
  tags,
  id,
}) => {
  const navigate = useNavigate()
  const { t } = useI18n()
  const {
    handleMouseEnter,
    handleMouseLeave,
  } = useLinkCard()

  const handleClick = () => {
    navigate(`/link/${id}`)
  }

  const getTagStyle = (tag: Tag | string) => {
    if (typeof tag === 'string') {
      return { name: tag, background: '#e3f2fd', color: '#1976d2' }
    }
    return { name: tag.name || '', background: tag.background || '#e3f2fd', color: tag.color || '#1976d2' }
  }

  const translateTag = (tag: string): string => {
    if (tag === 'Favorites') return t('home.tag_favorites')
    if (tag === 'Work') return t('home.tag_work')
    if (tag === 'Personal') return t('home.tag_personal')
    if (tag === 'All') return t('home.tag_all')
    return tag
  }

  return (
    <styles.Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {imageUrl && (
        <styles.ImageContainer>
          <img src={imageUrl} alt={title} />
        </styles.ImageContainer>
      )}
      
      <styles.Content>
        <styles.Header>
          {iconUrl ? (
            <img src={iconUrl} alt="Website icon" />
          ) : (
            <styles.Icon>
              <WebsiteIcon size={24} color="currentColor" />
            </styles.Icon>
          )}
          <styles.Title>{title}</styles.Title>
        </styles.Header>
        
        <styles.URL>{url}</styles.URL>
        
        <styles.Tags>
          {tags.map((tag: Tag | string, index: number) => {
            const tagStyle = getTagStyle(tag);
            const tagName = typeof tag === 'string' ? tag : (tag.name || '');
            return (
              <styles.Tag
                key={index}
                $background={tagStyle.background}
                $color={tagStyle.color}
              >
                {translateTag(tagName)}
              </styles.Tag>
            );
          })}
        </styles.Tags>
        
        <styles.Arrow className="card-arrow">
          <span>{t('home.see_more')}</span>
          <ArrowIcon size={24} color="currentColor" />
        </styles.Arrow>
      </styles.Content>
    </styles.Container>
  )
}

export default LinkCard