import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as styles from './AddView.styles'
import { useAddView } from './useAddView'
import * as Header from '../Header'
import { BackArrowIcon, UploadIcon } from '../../constants/icons.constants'

const AddView: React.FC = () => {
  const navigate = useNavigate()
  const {
    url, title, subtitle, description, note,
    selectedTags, availableTags,
    imageUrl, iconUrl, isFetchingPreview, errors,
    handleUrlChange, handleTitleChange, handleSubtitleChange,
    handleDescriptionChange, handleNoteChange, handleImageChange,
    handleTagToggle, addNewTag, fetchLinkPreview,
    handleSubmit
  } = useAddView()

  return (
    <styles.Container>
      <Header.HeaderContainer>
        <Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          Atrás
        </Header.BackButton>
        <Header.Title>Agregar</Header.Title>
        <Header.Spacer />
      </Header.HeaderContainer>
      
      <styles.Form onSubmit={handleSubmit}>
        <styles.FormContent>
          <styles.FieldGroup>
            <styles.Label>Enlace</styles.Label>
            <styles.Input
              placeholder="https://ejemplo.com"
              value={url}
              onChange={handleUrlChange}
              className={errors.url ? 'error' : ''}
            />
            {errors.url && <styles.ErrorMessage>{errors.url}</styles.ErrorMessage>}
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>Icono</styles.Label>
            {iconUrl ? (
              <styles.IconDisplay>
                <img src={iconUrl} alt="" />
              </styles.IconDisplay>
            ) : (
              <styles.HelperText>Se obtendrá de la URL</styles.HelperText>
            )}
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>Título</styles.Label>
            <styles.Input
              placeholder="Título del enlace"
              value={title}
              onChange={handleTitleChange}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <styles.ErrorMessage>{errors.title}</styles.ErrorMessage>}
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>Subtítulo</styles.Label>
            <styles.Input
              placeholder="Subtítulo opcional"
              value={subtitle}
              onChange={handleSubtitleChange}
            />
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>Descripción</styles.Label>
            <styles.TextArea
              placeholder="Descripción..."
              value={description}
              onChange={handleDescriptionChange}
            />
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>Nota</styles.Label>
            <styles.TextArea
              placeholder="Nota personal..."
              value={note}
              onChange={handleNoteChange}
            />
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>Imagen</styles.Label>
            {imageUrl ? (
              <styles.ImagePreview onClick={() => document.getElementById('imageUpload')?.click()}>
                <img src={imageUrl} alt="" />
              </styles.ImagePreview>
            ) : (
              <styles.UploadArea onClick={() => document.getElementById('imageUpload')?.click()}>
                <UploadIcon size={36} />
                <p>Subir imagen</p>
              </styles.UploadArea>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>Etiquetas</styles.Label>
            <styles.TagsContainer>
              {availableTags.map(tag => (
                <styles.TagChip
                  key={tag}
                  type="button"
                  $selected={selectedTags.includes(tag)}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </styles.TagChip>
              ))}
              <styles.AddTagButton
                type="button"
                onClick={() => {
                  const newTag = prompt('Nueva etiqueta:');
                  if (newTag?.trim()) addNewTag(newTag.trim());
                }}
              >
                +
              </styles.AddTagButton>
            </styles.TagsContainer>
          </styles.FieldGroup>
        </styles.FormContent>
        
        <styles.ActionRow>
          <styles.CancelButton type="button" onClick={() => navigate('/')}>
            Cancelar
          </styles.CancelButton>
          <styles.SubmitButton type="submit" disabled={Object.keys(errors).length > 0}>
            Guardar
          </styles.SubmitButton>
        </styles.ActionRow>
      </styles.Form>
    </styles.Container>
  )
}

export default AddView