import styled from 'styled-components';
import { HeaderContainer, BackButton, Title, Spacer } from '../Header';

export { HeaderContainer, BackButton, Title, Spacer };

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-bottom: 100px;
`;

export const Content = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

export const FormCard = styled.form`
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
`;

export const FormContent = styled.div`
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.15);
  }
  
  &.error {
    border-color: var(--color-danger);
    box-shadow: 0 0 0 4px rgba(255, 59, 48, 0.15);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 14px var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  resize: vertical;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
  box-sizing: border-box;
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.15);
  }
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 180px;
  background: var(--color-background);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--color-border);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UploadArea = styled.button`
  width: 100%;
  height: 100px;
  background: var(--color-background);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: var(--color-primary);
    opacity: 0.5;
    margin-bottom: var(--space-xs);
  }
  
  p {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin: 0;
  }
  
  &:hover {
    border-color: var(--color-primary);
    background: var(--color-primary-light);
  }
`;

export const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--color-background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  
  img {
    width: 44px;
    height: 44px;
    border-radius: var(--radius-md);
    background: white;
    object-fit: contain;
  }
`;

export const IconPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xl);
  background: var(--color-background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  
  svg {
    color: var(--color-text-tertiary);
    opacity: 0.4;
  }
  
  p {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin: 0;
  }
`;

export const RemoveButton = styled.button`
  padding: var(--space-xs) var(--space-md);
  background: rgba(255, 59, 48, 0.08);
  border: none;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-danger);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 59, 48, 0.15);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

export const TagChip = styled.button<{ $selected?: boolean }>`
  padding: 8px var(--space-md);
  background: ${({ $selected }) => $selected ? 'var(--color-primary)' : 'var(--color-background)'};
  border: 1px solid ${({ $selected }) => $selected ? 'var(--color-primary)' : 'var(--color-border)'};
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: ${({ $selected }) => $selected ? 'white' : 'var(--color-text-secondary)'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--color-primary);
    color: ${({ $selected }) => $selected ? 'white' : 'var(--color-primary)'};
  }
`;

export const AddTagButton = styled.button`
  padding: 8px var(--space-md);
  background: var(--color-primary-light);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`;

export const PreviewButton = styled.button`
  width: 100%;
  padding: 14px var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

export const ActionRow = styled.div`
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-lg);
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 14px var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  
  &:hover {
    background: var(--color-border);
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 14px var(--space-md);
  background: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: var(--color-primary-dark);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-danger);
  padding-left: 4px;
`;

export const HelperText = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  padding-left: 4px;
  margin: 0;
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  
  .spinner {
    width: 36px;
    height: 36px;
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
`;

export const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
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
`;

export const ErrorButton = styled.button`
  padding: 12px 24px;
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
`;