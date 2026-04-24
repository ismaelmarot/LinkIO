import React, { useState } from 'react'
const APP_VERSION = '1.0.0';
import { useNavigate } from 'react-router-dom'
import * as styles from './ConfigView.styles'
import { useConfigView } from './useConfigView'
import * as Header from '../Header'
import { BackArrowIcon, ArrowIcon } from '../../constants/icons.constants'

const ConfigView: React.FC = () => {
  const navigate = useNavigate()
  const {
    appearanceMode,
    setAppearanceMode,
    language,
    setLanguage,
    tags,
    isSaving,
    handleAddTag,
    handleRemoveTag,
    handleSaveSettings,
    t
  } = useConfigView();
  const [newTag, setNewTag] = useState('')

  return (
    <styles.Container>
      <Header.HeaderContainer>
        <Header.BackButton onClick={() => navigate('/')}>
          <BackArrowIcon size={20} />
          {t('detail.back')}
        </Header.BackButton>
        <Header.Title>{t('config.title')}</Header.Title>
        <Header.Spacer />
      </Header.HeaderContainer>
      
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 16px' }}>
        {/* Appearance Mode Section */}
        <styles.Section>
          <styles.SectionHeader>{t('config.appearance')}</styles.SectionHeader>
          <styles.SectionContent>
            <styles.SettingRow>
              <styles.SettingLabel>
                <span>{t('config.mode')}</span>
                <span>{t('config.mode_desc')}</span>
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
                  <span style={{ marginLeft: '8px' }}>{t('config.light')}</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="appearance"
                    value="dark"
                    checked={appearanceMode === 'dark'}
                    onChange={(e) => setAppearanceMode(e.target.value as 'dark')}
                  />
                  <span style={{ marginLeft: '8px' }}>{t('config.dark')}</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="appearance"
                    value="auto"
                    checked={appearanceMode === 'auto'}
                    onChange={(e) => setAppearanceMode(e.target.value as 'auto')}
                  />
                  <span style={{ marginLeft: '8px' }}>{t('config.system')}</span>
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
                <span>{t('config.language')}</span>
                <span>{t('config.language_desc')}</span>
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
          <styles.SectionHeader>{t('config.tags')}</styles.SectionHeader>
          <styles.SectionContent>
            <styles.TagsSection>
              <styles.TagInputContainer>
                <styles.TagInput
                  placeholder={t('config.new_tag')}
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
                    borderRadius: '34px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: !newTag.trim() ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {t('config.add_tag')}
                </button>
              </styles.TagInputContainer>
              
              {tags.length > 0 && (
                <styles.TagsList>
                  {tags.map((tag, index) => (
                    <styles.TagItem
                      key={index}
                      $isRemovable={true}
                    >
                      <span>{tag}</span>
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
                    </styles.TagItem>
                  ))}
                </styles.TagsList>
              )}
            </styles.TagsSection>
          </styles.SectionContent>
        </styles.Section>
        
        {/* About Section */}
        <styles.AboutSection>
          <styles.AboutTitle>
            <styles.AppIcon src="/Linkio-icon.png" alt="LinkIO" />
            {t('config.about')}
          </styles.AboutTitle>
          <styles.AboutText>
            {t('config.about_desc')}
          </styles.AboutText>
          <styles.VersionInfo>
            {t('config.version')} {APP_VERSION} • {t('config.developed')}{' '}
            <a href="https://github.com/ismaelmarot" target="_blank" rel="noopener noreferrer">
              Ismael Marot
            </a>
            {' '}• {t('config.rights')}
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
            {isSaving ? t('config.saving') : t('config.save')}
          </button>
        </div>
      </div>
    </styles.Container>
  );
};

export default ConfigView;