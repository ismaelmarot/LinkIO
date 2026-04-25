import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: var(--space-xl) var(--space-md) 90px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xl);
  padding: 0 var(--space-xs);
`;

export const Title = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-text-primary);
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  padding: var(--space-xs) var(--space-sm);
  background-color: transparent;
  border: none;
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-text-primary);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Section = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  margin-bottom: var(--space-xl);
  overflow: hidden;
`;

export const SectionHeader = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  padding: var(--space-lg) var(--space-xl);
  margin: 0;
  border-bottom: 1px solid var(--color-border);
`;

export const SectionContent = styled.div`
  padding: var(--space-lg);
`;

export const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-background);
  
  &:last-child {
    border-bottom: none;
  }
`;

export const SettingLabel = styled.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 2px;
  }
  
  span:last-child {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }
`;

export const ToggleContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const ToggleInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

export const ToggleSlider = styled.span`
  position: relative;
  width: 51px;
  height: 31px;
  background-color: var(--color-border);
  border-radius: 16px;
  display: inline-block;
  transition: all 0.2s ease;
  
  &:before {
    position: absolute;
    content: "";
    height: 27px;
    width: 27px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  ${ToggleInput}:checked + & {
    background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
    
    &:before {
      transform: translateX(20px);
    }
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 160px;
`;

export const Select = styled.select`
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  background-color: var(--color-card-bg);
  color: var(--color-text-primary);
  appearance: none;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #fd7a2d;
    box-shadow: 0 0 0 3px rgba(253, 122, 45, 0.15);
  }
  
  &:hover:not(:focus) {
    border-color: var(--color-text-tertiary);
  }
  
  option {
    background-color: var(--color-card-bg);
    color: var(--color-text-primary);
  }
`;

export const SelectArrow = styled.div`
  position: absolute;
  right: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 18px;
    height: 18px;
    color: var(--color-text-secondary);
  }
`;

export const TagsSection = styled.div`
  margin-top: var(--space-md);
`;

export const TagInputContainer = styled.div`
  display: flex;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`;

export const TagInput = styled.input`
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  transition: all 0.2s ease;
  background-color: var(--color-card-bg);
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    outline: none;
    border-color: #fd7a2d;
    box-shadow: 0 0 0 3px rgba(253, 122, 45, 0.15);
  }
  
  &:hover:not(:focus) {
    border-color: var(--color-text-tertiary);
  }
`;

export const AddTagButton = styled.button`
  padding: var(--space-sm) var(--space-md);
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`;

export const TagItem = styled.div<{ $isRemovable?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px var(--space-sm);
  background-color: rgba(253, 122, 45, 0.1);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  color: #fd7a2d;
  
  button {
    background: none;
    border: none;
    color: #fd7a2d;
    font-size: var(--font-size-sm);
    cursor: pointer;
    padding: 0;
    line-height: 1;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const AboutSection = styled.div`
  background-color: var(--color-background);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
`;

export const AboutTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-md);
`;

export const AppIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
`;

export const AboutText = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
  font-size: var(--font-size-base);
`;

export const VersionInfo = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-align: center;
  margin-top: var(--space-lg);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border);
  
  a {
    color: var(--color-text-tertiary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;