import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-lg) var(--space-xs);
  position: relative;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: var(--space-xs) var(--space-sm);
  background: transparent;
  border: none;
  color: #fd7a2d;
  font-size: var(--font-size-lg);
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  position: absolute;
  left: 0;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: -1px;
  text-align: center;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: var(--space-sm) var(--space-lg);
  background: ${({ $variant }) => $variant === 'secondary' ? 'var(--color-background)' : 'linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)'};
  color: ${({ $variant }) => $variant === 'secondary' ? 'var(--color-text-primary)' : 'white'};
  border: ${({ $variant }) => $variant === 'secondary' ? '1px solid var(--color-border)' : 'none'};
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  box-shadow: ${({ $variant }) => $variant === 'secondary' ? 'none' : 'var(--shadow-sm)'};
  
  &:hover {
    background: ${({ $variant }) => $variant === 'secondary' ? 'var(--color-border)' : 'linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%)'};
    transform: translateY(-1px);
    box-shadow: ${({ $variant }) => $variant === 'secondary' ? 'none' : 'var(--shadow-md)'};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Spacer = styled.div`
  width: 80px;
`