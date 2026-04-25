import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as styles from './EditLinkView.styles'
import { useEditLinkView } from './useEditLinkView'
import * as Header from '../Header'
import { useI18n } from '../../app/i18n'
import { BackArrowIcon, UploadIcon, GlobeIcon } from '../../constants'
import AddTagModal from '../AddTagModal/AddTagModal'

const EditLinkView: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { t } = useI18n()
  const [showTagModal, setShowTagModal] = useState(false)
  const {
    url,
    title,
    subtitle,
    description,
    note,
    selectedTags,
    availableTags,
    imageUrl,
    iconUrl,
    isFetchingPreview,
    errors,
    loading,
    error,
    isSaving,
    handleUrlChange,
    handleTitleChange,
    handleSubtitleChange,
    handleDescriptionChange,
    handleNoteChange,
    handleImageChange,
    handleTagToggle,
    addNewTag,
    fetchLinkPreview,
    handleSubmit
  } = useEditLinkView()

  const translateTag = (tag: string): string => {
    if (tag === 'Favorites') return t('home.tag_favorites')
    if (tag === 'Work') return t('home.tag_work')
    if (tag === 'Personal') return t('home.tag_personal')
    return tag
  }

  const handleBack = () => {
    navigate(`/link/${id}`)
  }

  if (loading) {
    return (
      <styles.Container>
        <Header.HeaderContainer>
          <Header.BackButton onClick={handleBack}>
            <BackArrowIcon size={20} />
            {t('edit.cancel')}
          </Header.BackButton>
          <Header.Title>{t('edit.title')}</Header.Title>
          <Header.Spacer />
        </Header.HeaderContainer>
        <styles.LoadingContainer>
          <div className="spinner" />
          <p>Cargando...</p>
        </styles.LoadingContainer>
      </styles.Container>
    )
  }

  if (error) {
    return (
      <styles.Container>
        <Header.HeaderContainer>
          <Header.BackButton onClick={() => navigate('/')}>
            <BackArrowIcon size={20} />
            Atrás
          </Header.BackButton>
          <Header.Title>Error</Header.Title>
          <Header.Spacer />
        </Header.HeaderContainer>
        <styles.ErrorContainer>
          <h2>{error}</h2>
          <p>Ha ocurrido un error al cargar el enlace.</p>
          <styles.ErrorButton onClick={() => navigate('/')}>
            Volver al inicio
          </styles.ErrorButton>
        </styles.ErrorContainer>
      </styles.Container>
    )
  }

  return (
    <styles.Container>
      <Header.HeaderContainer>
        <Header.BackButton onClick={handleBack}>
          <BackArrowIcon size={20} />
          Atrás
        </Header.BackButton>
        <Header.Title>Editar</Header.Title>
        <Header.Spacer />
      </Header.HeaderContainer>
      
      <styles.Content>
        <styles.FormCard onSubmit={handleSubmit}>
          <styles.FormContent>
            <styles.Section>
              <styles.Label>URL</styles.Label>
              <styles.Input
                type="url"
                placeholder="https://ejemplo.com"
                value={url}
                onChange={handleUrlChange}
                className={errors.url ? 'error' : ''}
              />
              {errors.url && <styles.ErrorMessage>{errors.url}</styles.ErrorMessage>}
            </styles.Section>
            
            <styles.Section>
              <styles.Label>Icono</styles.Label>
              {iconUrl ? (
                <styles.IconRow>
                  <img src={iconUrl} alt="Icono" />
                </styles.IconRow>
              ) : (
                <styles.IconPlaceholder>
                  <GlobeIcon size={32} />
                  <p>Se obtendrá de la URL</p>
                </styles.IconPlaceholder>
              )}
            </styles.Section>
            
            <styles.Section>
              <styles.Label>Título</styles.Label>
              <styles.Input
                type="text"
                placeholder="Título del enlace"
                value={title}
                onChange={handleTitleChange}
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <styles.ErrorMessage>{errors.title}</styles.ErrorMessage>}
            </styles.Section>
            
            <styles.Section>
              <styles.Label>Subtítulo</styles.Label>
              <styles.Input
                type="text"
                placeholder="Subtítulo opcional"
                value={subtitle}
                onChange={handleSubtitleChange}
              />
            </styles.Section>
            
            <styles.Section>
              <styles.Label>Descripción</styles.Label>
              <styles.TextArea
                placeholder="Describe el enlace..."
                value={description}
                onChange={handleDescriptionChange}
              />
            </styles.Section>
            
            <styles.Section>
              <styles.Label>Nota</styles.Label>
              <styles.TextArea
                placeholder="Nota personal..."
                value={note}
                onChange={handleNoteChange}
              />
            </styles.Section>
            
            <styles.Section>
              <styles.Label>Imagen</styles.Label>
              {imageUrl ? (
                <styles.ImagePreview onClick={() => document.getElementById('imageUpload')?.click()}>
                  <img src={imageUrl} alt="Vista previa" />
                </styles.ImagePreview>
              ) : (
                <styles.UploadArea 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('imageUpload')?.click();
                  }}
                >
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
            </styles.Section>
            
            <styles.Section>
              <styles.Label>Etiquetas</styles.Label>
              <styles.TagsContainer>
                {availableTags.map(tag => (
                  <styles.TagChip
                    key={tag}
                    type="button"
                    $selected={selectedTags.includes(tag)}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {translateTag(tag)}
                  </styles.TagChip>
                ))}
                <styles.AddTagButton
                  type="button"
                  onClick={() => setShowTagModal(true)}
                >
                  +
                </styles.AddTagButton>
              </styles.TagsContainer>
            </styles.Section>
          </styles.FormContent>
          
          <styles.ActionRow>
            <styles.CancelButton type="button" onClick={handleBack}>
              {t('edit.cancel')}
            </styles.CancelButton>
            <styles.SubmitButton type="submit" disabled={Object.keys(errors).length > 0 || isSaving}>
              {isSaving ? t('edit.saving') : t('edit.save')}
            </styles.SubmitButton>
          </styles.ActionRow>
        </styles.FormCard>
      </styles.Content>

      <AddTagModal
        isOpen={showTagModal}
        onClose={() => setShowTagModal(false)}
        onAdd={(tag) => addNewTag(tag)}
        title={t('add.new_tag')}
        placeholder={t('add.new_tag_placeholder')}
        addButtonText={t('add.add')}
        cancelButtonText={t('add.cancel')}
      />
    </styles.Container>
  )
}

export default EditLinkView