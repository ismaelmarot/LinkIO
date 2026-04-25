import React, { useState } from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
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
  z-index: 1000;
`

const ModalContainer = styled.div`
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 320px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 16px;
  text-align: center;
`

const ModalInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: 34px;
  font-size: 16px;
  background: var(--color-background);
  color: var(--color-text-primary);
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    border-color: #fd7a2d;
  }
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
`

const ModalButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`

const ModalButton = styled.button<{ $primary?: boolean }>`
  flex: 1;
  padding: 14px 20px;
  border-radius: 34px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $primary }) => $primary 
    ? 'linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)'
    : 'var(--color-background)'};
  color: ${({ $primary }) => $primary ? 'white' : 'var(--color-text-primary)'};
  border: ${({ $primary }) => $primary ? 'none' : '1px solid var(--color-border)'};
  
  &:hover {
    background: ${({ $primary }) => $primary 
      ? 'linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%)'
      : 'var(--color-border)'};
  }
  
  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
    color: #666;
  }
`

interface AddTagModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (tag: string) => void
  title: string
  placeholder: string
  addButtonText: string
  cancelButtonText: string
}

const AddTagModal: React.FC<AddTagModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  title,
  placeholder,
  addButtonText,
  cancelButtonText
}) => {
  const [tagName, setTagName] = useState('')

  if (!isOpen) return null

  const handleAdd = () => {
    if (tagName.trim()) {
      onAdd(tagName.trim())
      setTagName('')
      onClose()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd()
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <ModalInput
          type="text"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          autoFocus
        />
        <ModalButtons>
          <ModalButton onClick={onClose}>
            {cancelButtonText}
          </ModalButton>
          <ModalButton $primary onClick={handleAdd} disabled={!tagName.trim()}>
            {addButtonText}
          </ModalButton>
        </ModalButtons>
      </ModalContainer>
    </Backdrop>
  )
}

export default AddTagModal