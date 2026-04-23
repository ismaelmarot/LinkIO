import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './LinkCard.styles';
import { useLinkCard } from './useLinkCard';
import { WebsiteIcon, ArrowIcon } from '../../constants/icons.constants';

interface Tag {
  name?: string;
  background?: string;
  color?: string;
}

interface LinkCardProps {
  imageUrl?: string;
  title: string;
  url: string;
  iconUrl?: string;
  tags: Tag[] | string[];
  id: number;
}

const LinkCard: React.FC<LinkCardProps> = ({
  imageUrl,
  title,
  url,
  iconUrl,
  tags,
  id,
}) => {
  const navigate = useNavigate();
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  } = useLinkCard();

  const handleClick = () => {
    navigate(`/link/${id}`);
  };

  const getTagStyle = (tag: Tag | string) => {
    if (typeof tag === 'string') {
      return { name: tag, background: '#e3f2fd', color: '#1976d2' };
    }
    return { name: tag.name || '', background: tag.background || '#e3f2fd', color: tag.color || '#1976d2' };
  };

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
            return (
              <styles.Tag
                key={index}
                $background={tagStyle.background}
                $color={tagStyle.color}
              >
                {tagStyle.name}
              </styles.Tag>
            );
          })}
        </styles.Tags>
        
        <styles.Arrow className="card-arrow">
          <span>Ver más</span>
          <ArrowIcon size={24} color="currentColor" />
        </styles.Arrow>
      </styles.Content>
    </styles.Container>
  );
};

export default LinkCard;