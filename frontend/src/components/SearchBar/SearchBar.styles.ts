import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto var(--space-xl);
`

export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: var(--space-md);
`

export const SearchIcon = styled.div`
  position: absolute;
  left: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  pointer-events: none;
  
  svg {
    width: 20px;
    height: 20px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: var(--space-md) var(--space-md) var(--space-md) 48px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  background-color: var(--color-card-bg);
  transition: all 0.2s ease;
  color: var(--color-text-primary);
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1);
  }
  
  &:hover:not(:focus) {
    border-color: var(--color-text-tertiary);
  }
`

export const TagFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`

export const TagButton = styled.button<{ $active: boolean }>`
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  border: 1px solid ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-border)')};
  background-color: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-card-bg)')};
  color: ${({ $active }) => ($active ? 'white' : 'var(--color-text-secondary)')};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    border-color: var(--color-primary);
    color: ${({ $active }) => ($active ? 'white' : 'var(--color-primary)')};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const ClearButton = styled.button`
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border: none;
  background-color: transparent;
  color: var(--color-text-tertiary);
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-text-secondary);
  }
`