import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 64px;
  background-color: var(--color-card-bg);
  border-top: 1px solid var(--color-border);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: var(--space-xs) var(--space-2xl);
  background: transparent;
  border: none;
  color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  font-size: var(--font-size-sm);
  font-weight: ${props => props.$active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const Label = styled.span<{ $active?: boolean }>`
  font-size: 10px;
  font-weight: ${props => props.$active ? '600' : '500'};
  color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
`;