import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as styles from './EditLinkView.styles';
import { useEditLinkView } from './useEditLinkView';
import * as Header from '../Header';
import { BackArrowIcon, UploadIcon, GlobeIcon } from '../../constants/icons.constants';

const EditLinkView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
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
    handleSubmit,
    setIconUrl
  } = useEditLinkView();

  const handleBack = () => {
    navigate(`/link/${id}`);
  };

  if (loading) {
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
        <styles.LoadingContainer>
          <div className="spinner" />
          <p>Cargando...</p>
        </styles.LoadingContainer>
      </styles.Container>
    );
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
    );
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
                <styles.ImagePreview>
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
              <styles.Label>Icono</styles.Label>
              {iconUrl ? (
                <styles.IconRow>
                  <img src={iconUrl} alt="Icono" />
                  <styles.RemoveButton onClick={() => setIconUrl(null)}>
                    Eliminar
                  </styles.RemoveButton>
                </styles.IconRow>
              ) : (
                <styles.IconPlaceholder>
                  <GlobeIcon size={32} />
                  <p>Se obtendrá de la URL</p>
                </styles.IconPlaceholder>
              )}
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
            </styles.Section>
            
            <styles.PreviewButton
              type="button"
              onClick={fetchLinkPreview}
              disabled={isFetchingPreview || !url.trim()}
            >
              {isFetchingPreview ? 'Cargando...' : 'Obtener vista previa'}
            </styles.PreviewButton>
          </styles.FormContent>
          
          <styles.ActionRow>
            <styles.CancelButton type="button" onClick={handleBack}>
              Cancelar
            </styles.CancelButton>
            <styles.SubmitButton type="submit" disabled={Object.keys(errors).length > 0 || isSaving}>
              {isSaving ? 'Guardando...' : 'Guardar'}
            </styles.SubmitButton>
          </styles.ActionRow>
        </styles.FormCard>
      </styles.Content>
    </styles.Container>
  );
};

export default EditLinkView;