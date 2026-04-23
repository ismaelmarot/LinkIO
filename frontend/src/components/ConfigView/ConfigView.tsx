import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './ConfigView.styles';
import { useConfigView } from './useConfigView';
import * as Header from '../Header';
import { BackArrowIcon, ArrowIcon } from '../../constants/icons.constants';

const ConfigView: React.FC = () => {
  const navigate = useNavigate();
  const {
    appearanceMode,
    setAppearanceMode,
    language,
    setLanguage,
    tags,
    isSaving,
    handleAddTag,
    handleRemoveTag,
    handleSaveSettings
  } = useConfigView();
  const [newTag, setNewTag] = useState('');

  return (
    <styles.Container>
      <Header.HeaderContainer>
        <Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          Atrás
        </Header.BackButton>
        <Header.Title>Configuración</Header.Title>
        <Header.Spacer />
      </Header.HeaderContainer>
      
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
        {/* Appearance Mode Section */}
        <styles.Section>
          <styles.SectionHeader>Apariencia</styles.SectionHeader>
          <styles.SectionContent>
            <styles.SettingRow>
              <styles.SettingLabel>
                <span>Modo</span>
                <span>Selecciona entre claro, oscuro o automático</span>
              </styles.SettingLabel>
              <div style={{ display: 'flex', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="appearance"
                    value="light"
                    checked={appearanceMode === 'light'}
                    onChange={(e) => setAppearanceMode(e.target.value as 'light')}
                  />
                  <span style={{ marginLeft: '8px' }}>Claro</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="appearance"
                    value="dark"
                    checked={appearanceMode === 'dark'}
                    onChange={(e) => setAppearanceMode(e.target.value as 'dark')}
                  />
                  <span style={{ marginLeft: '8px' }}>Oscuro</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="appearance"
                    value="auto"
                    checked={appearanceMode === 'auto'}
                    onChange={(e) => setAppearanceMode(e.target.value as 'auto')}
                  />
                  <span style={{ marginLeft: '8px' }}>Automático</span>
                </label>
              </div>
            </styles.SettingRow>
          </styles.SectionContent>
        </styles.Section>
        
        {/* Language Section */}
        <styles.Section>
          <styles.SectionHeader>Idioma</styles.SectionHeader>
          <styles.SectionContent>
            <styles.SettingRow>
              <styles.SettingLabel>
                <span>Idioma</span>
                <span>Selecciona el idioma de la interfaz</span>
              </styles.SettingLabel>
              <styles.SelectContainer>
                <styles.Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </styles.Select>
                 <styles.SelectArrow>
                   <ArrowIcon size={24} color="currentColor" />
                 </styles.SelectArrow>
              </styles.SelectContainer>
            </styles.SettingRow>
          </styles.SectionContent>
        </styles.Section>
        
        {/* Tags Section */}
        <styles.Section>
          <styles.SectionHeader>Tags</styles.SectionHeader>
          <styles.SectionContent>
            <styles.TagsSection>
              <styles.TagInputContainer>
                <styles.TagInput
                  placeholder="Nuevo tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddTag();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  disabled={!newTag.trim()}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: !newTag.trim() ? '#e0e0e0' : '#007aff',
                    color: !newTag.trim() ? '#666' : 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: !newTag.trim() ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Agregar
                </button>
              </styles.TagInputContainer>
              
              {tags.length > 0 && (
                <styles.TagsList>
                  {tags.map((tag, index) => (
                    <styles.TagItem
                      key={index}
                      $isRemovable={tag !== 'All' && tag !== 'Favorites'}
                    >
                      <span>{tag}</span>
                      {tag !== 'All' && tag !== 'Favorites' && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          style={{
                            padding: '0',
                            marginLeft: '4px'
                          }}
                        >
                          ×
                        </button>
                      )}
                    </styles.TagItem>
                  ))}
                </styles.TagsList>
              )}
            </styles.TagsSection>
          </styles.SectionContent>
        </styles.Section>
        
        {/* About Section */}
        <styles.AboutSection>
          <styles.AboutTitle>Acerca de LinkIO</styles.AboutTitle>
          <styles.AboutText>
            LinkIO es tu gestor personal de enlaces organizado y visual. 
            Guarda, categoriza y accede rápidamente a todos tus enlaces favoritos 
            con una interfaz limpia y moderna inspirada en el diseño de Apple.
          </styles.AboutText>
          <styles.VersionInfo>
            Versión 1.0.0 • Desarrollado con ❤️
          </styles.VersionInfo>
        </styles.AboutSection>
        
        {/* Save Button */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            type="button"
            onClick={handleSaveSettings}
            disabled={isSaving}
            style={{
              padding: '14px 32px',
              backgroundColor: isSaving ? '#e0e0e0' : '#007aff',
              color: isSaving ? '#666' : 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isSaving ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              transform: isSaving ? 'scale(0.98)' : 'translateY(0)'
            }}
          >
            {isSaving ? 'Guardando...' : 'Guardar Configuración'}
          </button>
        </div>
      </div>
    </styles.Container>
  );
};

export default ConfigView;