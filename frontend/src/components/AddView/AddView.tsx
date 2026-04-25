import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../../app/i18n'
import * as styles from './AddView.styles'
import { useAddView } from './useAddView'
import * as Header from '../Header'
import { BackArrowIcon, UploadIcon } from '../../constants'
import AddTagModal from '../AddTagModal/AddTagModal'

const AddView: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useI18n()
  const [showTagModal, setShowTagModal] = useState(false)
  const {
    url, title, subtitle, description, note,
    selectedTags, availableTags,
    imageUrl, iconUrl, isFetchingPreview, errors,
    handleUrlChange, handleTitleChange, handleSubtitleChange,
    handleDescriptionChange, handleNoteChange, handleImageChange,
    handleTagToggle, addNewTag, fetchLinkPreview,
    handleSubmit
  } = useAddView()

  const translateTag = (tag: string): string => {
    if (tag === 'Favorites') return t('home.tag_favorites')
    if (tag === 'Work') return t('home.tag_work')
    if (tag === 'Personal') return t('home.tag_personal')
    return tag
  }

  return (
    <styles.Container>
      <Header.HeaderContainer>
        <Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          {t('add.cancel')}
        </Header.BackButton>
        <Header.Title>{t('add.title')}</Header.Title>
        <Header.Spacer />
      </Header.HeaderContainer>
      
      <styles.Form onSubmit={handleSubmit}>
        <styles.FormContent>
          <styles.FieldGroup>
            <styles.Label>{t('add.url')}</styles.Label>
            <styles.Input
              placeholder="https://example.com"
              value={url}
              onChange={handleUrlChange}
              className={errors.url ? 'error' : ''}
            />
            {errors.url && <styles.ErrorMessage>{errors.url}</styles.ErrorMessage>}
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>{t('add.icon')}</styles.Label>
            {iconUrl ? (
              <styles.IconDisplay>
                <img src={iconUrl} alt="" />
              </styles.IconDisplay>
            ) : (
              <styles.HelperText>{t('add.get_from_url')}</styles.HelperText>
            )}
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>{t('add.title_field')}</styles.Label>
            <styles.Input
              placeholder={t('add.title_placeholder')}
              value={title}
              onChange={handleTitleChange}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <styles.ErrorMessage>{errors.title}</styles.ErrorMessage>}
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>{t('add.subtitle')}</styles.Label>
            <styles.Input
              placeholder={t('add.subtitle_placeholder')}
              value={subtitle}
              onChange={handleSubtitleChange}
            />
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>{t('add.description')}</styles.Label>
            <styles.TextArea
              placeholder={t('add.description_placeholder')}
              value={description}
              onChange={handleDescriptionChange}
            />
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>{t('add.note')}</styles.Label>
            <styles.TextArea
              placeholder={t('add.note_placeholder')}
              value={note}
              onChange={handleNoteChange}
            />
          </styles.FieldGroup>
          
          <styles.FieldGroup>
            <styles.Label>{t('add.image')}</styles.Label>
            {imageUrl ? (
              <styles.ImagePreview onClick={() => document.getElementById('imageUpload')?.click()}>
                <img src={imageUrl} alt="" />
              </styles.ImagePreview>
            ) : (
              <styles.UploadArea onClick={() => document.getElementById('imageUpload')?.click()}>
                <UploadIcon size={36} />
                <p>{t('add.upload_image')}</p>
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
            <styles.Label>{t('add.tags')}</styles.Label>
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
          </styles.FieldGroup>
        </styles.FormContent>
        
        <styles.ActionRow>
          <styles.CancelButton type="button" onClick={() => navigate('/')}>
            {t('add.cancel')}
          </styles.CancelButton>
          <styles.SubmitButton type="submit" disabled={Object.keys(errors).length > 0}>
            {t('add.save')}
          </styles.SubmitButton>
        </styles.ActionRow>
      </styles.Form>

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

export default AddView