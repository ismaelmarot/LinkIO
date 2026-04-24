import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: 0 var(--space-md) 100px;
`

export const Content = styled.main`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`

export const LinkCard = styled.article`
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
`

export const HeroImage = styled.div`
  width: 100%;
  height: 220px;
  background: var(--color-background);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const HeroPlaceholder = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-secondary);
  
  svg {
    width: 64px;
    height: 64px;
    color: var(--color-text-tertiary);
    opacity: 0.3;
  }
`

export const CardContent = styled.div`
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
`

export const Favicon = styled.div<{ $hasImage?: boolean }>`
  width: 52px;
  height: 52px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--surface-secondary);
  border: 1px solid var(--color-border);
  
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--color-text-tertiary);
  }
`

export const TitleWrapper = styled.div`
  flex: 1;
  min-width: 0;
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 4px;
  letter-spacing: -0.3px;
  line-height: 1.25;
`

export const URLWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`

export const URL = styled.a`
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  text-decoration: none;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  &:hover {
    text-decoration: underline;
  }
`

export const CopyBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-secondary);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-border);
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: var(--color-text-secondary);
  }
`

export const Divider = styled.div`
  height: 1px;
  background: var(--color-border);
  margin: 0 calc(-1 * var(--space-xl));
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`

export const SectionTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`

export const Text = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
`

export const NoteBox = styled.div`
  background: var(--surface-secondary);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  
  p {
    font-size: var(--font-size-sm);
    color: var(--color-text-primary);
    margin: 0;
    line-height: 1.6;
    white-space: pre-wrap;
  }
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`

export const Tag = styled.span<{ $bg: string; $color: string }>`
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`

export const ActionBtn = styled.button<{ $variant?: 'primary' | 'danger' }>`
  width: 100%;
  height: 52px;
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  border: none;
  
  ${({ $variant }) => {
    if ($variant === 'danger') {
      return `
        background: var(--color-danger);
        color: white;
        
        &:hover { opacity: 0.9; }
        &:active { opacity: 0.8; }
      `
    }
    return `
      background: var(--color-primary);
      color: white;
      
      &:hover { background: var(--color-primary-dark); }
      &:active { opacity: 0.9; }
    `
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

export const SecondaryActions = styled.div<{ $open?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  max-height: ${({ $open }) => ($open ? '120px' : '0')};
  overflow: hidden;
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  transition: all 0.3s ease;
`

export const MoreToggle = styled.button`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  background: transparent;
  border: none;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--color-text-primary);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

export const SecondaryBtn = styled.button`
  height: 48px;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  background: var(--surface-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  
  &:hover {
    background: var(--color-border);
  }
  
  &:active {
    opacity: 0.8;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`

export const DateText = styled.p`
  text-align: center;
  font-size: 12px;
  color: var(--color-text-tertiary);
  margin: 0;
`

export const LoadingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  
  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`

export const ErrorWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  text-align: center;
  
  h2 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-danger);
    margin: 0;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
  }
`

export const BackBtn = styled.button`
  padding: 14px 28px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: var(--color-primary-dark);
  }
`

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export const ModalContent = styled.div`
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  width: calc(100% - 48px);
  max-width: 320px;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`

export const ModalTitle = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-sm);
  text-align: center;
`

export const ModalText = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-xl);
  text-align: center;
  line-height: 1.5;
`

export const ModalButtons = styled.div`
  display: flex;
  gap: var(--space-sm);
`

export const ModalCancelBtn = styled.button`
  flex: 1;
  height: 48px;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  background: var(--surface-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    background: var(--color-border);
  }
`

export const ModalDeleteBtn = styled.button`
  flex: 1;
  height: 48px;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  background: var(--color-danger);
  color: white;
  border: none;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`