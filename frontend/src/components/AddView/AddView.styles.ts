import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: var(--space-md) var(--space-md) 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  box-sizing: border-box;
`;

export const FormContent = styled.div`
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  box-sizing: border-box;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`;

export const Label = styled.label`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  padding-left: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: var(--space-md) var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-lg);
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
  padding: var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-lg);
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
  border-radius: var(--radius-md);
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
  height: 120px;
  background: var(--color-background);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: var(--color-primary);
    opacity: 0.6;
    margin-bottom: var(--space-xs);
  }
  
  p {
    font-size: var(--font-size-base);
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
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: var(--color-background);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  
  img {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-md);
    background: white;
    object-fit: contain;
  }
`;

export const RemoveButton = styled.button`
  padding: var(--space-sm) var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-danger);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 59, 48, 0.1);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

export const TagChip = styled.button<{ $selected?: boolean }>`
  padding: var(--space-sm) var(--space-md);
  background: ${props => props.$selected ? 'var(--color-primary)' : 'var(--color-background)'};
  border: 1px solid ${props => props.$selected ? 'var(--color-primary)' : 'var(--color-border)'};
  border-radius: var(--radius-full);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: ${props => props.$selected ? 'white' : 'var(--color-text-secondary)'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--color-primary);
    color: ${props => props.$selected ? 'white' : 'var(--color-primary)'};
  }
`;

export const AddTagButton = styled.button`
  padding: var(--space-sm) var(--space-md);
  background: var(--color-primary-light);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`;

export const PreviewButton = styled.button`
  padding: var(--space-md) var(--space-lg);
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
  justify-content: space-between;
  padding: var(--space-lg);
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
  gap: var(--space-sm);
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-lg);
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  
  &:hover {
    background: var(--color-border);
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: var(--space-md);
  background: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-lg);
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