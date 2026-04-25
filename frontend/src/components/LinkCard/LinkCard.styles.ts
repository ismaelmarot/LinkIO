import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border: 1px solid var(--color-border);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-xl);
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
    border-color: #fd7a2d;
    
    &::before {
      border-color: #fd7a2d;
    }
    
    img {
      transform: scale(1.05);
    }
    
    .card-arrow span {
      color: #fd7a2d;
    }
    .card-arrow svg {
      transform: translateX(4px);
      color: #fd7a2d;
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    border-radius: var(--radius-lg);
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
  max-height: 140px;
  background: var(--surface-secondary);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  padding: var(--space-lg) var(--space-xl);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);
`

export const Icon = styled.div<{ $hasIcon?: boolean }>`
  width: 44px;
  height: 44px;
  background-color: ${({ $hasIcon }) => ($hasIcon ? 'var(--color-primary-light)' : 'var(--color-background)')};
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid ${({ $hasIcon }) => ($hasIcon ? '#fd7a2d' : 'var(--color-border)')};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  img, svg {
    width: 24px;
    height: 24px;
  }
  
  img {
    object-fit: contain;
    border-radius: var(--radius-sm);
  }
`

export const Title = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const URL = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: var(--space-xxs) 0 var(--space-md);
  word-break: break-all;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: auto;
`

export const Tag = styled.span<{ $background: string; $color: string }>`
  padding: 6px var(--space-sm);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 500;
  background-color: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

export const Arrow = styled.div`
  margin-top: var(--space-md);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-xs);
  
  span {
    font-size: var(--font-size-sm);
    color: #fd7a2d;
    font-weight: 500;
    letter-spacing: -0.2px;
    transition: color 0.3s ease;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #fd7a2d;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.3s ease;
  }
`