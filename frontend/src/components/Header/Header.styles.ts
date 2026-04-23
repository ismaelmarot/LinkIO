import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: var(--space-xl);
  padding: 0 var(--space-xs);
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: var(--space-xs) var(--space-sm);
  background: transparent;
  border: none;
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  
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
`;

export const Title = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.5px;
  text-align: center;
  flex: 1;
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: var(--space-sm) var(--space-lg);
  background-color: ${({ $variant }) => $variant === 'secondary' ? 'var(--color-background)' : 'var(--color-primary)'};
  color: ${({ $variant }) => $variant === 'secondary' ? 'var(--color-text-primary)' : 'white'};
  border: ${({ $variant }) => $variant === 'secondary' ? '1px solid var(--color-border)' : 'none'};
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  box-shadow: ${({ $variant }) => $variant === 'secondary' ? 'none' : 'var(--shadow-sm)'};
  
  &:hover {
    background-color: ${({ $variant }) => $variant === 'secondary' ? 'var(--color-border)' : 'var(--color-primary-dark)'};
    transform: ${({ $variant }) => $variant === 'secondary' ? 'none' : 'translateY(-1px)'};
    box-shadow: ${({ $variant }) => $variant === 'secondary' ? 'none' : 'var(--shadow-md)'};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Spacer = styled.div`
  width: 80px;
`;