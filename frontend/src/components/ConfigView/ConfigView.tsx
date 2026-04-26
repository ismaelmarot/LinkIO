import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import * as styles from './ConfigView.styles'
import { useConfigView } from './useConfigView'
import * as Header from '../Header'
import { APP_VERSION } from '../../constants/index'
import { BackArrowIcon, AddIcon } from '../../constants/icons.const'

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
            <styles.SettingLabel>
              <span>{t('config.mode')}</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>{t('config.mode_desc')}</span>
            </styles.SettingLabel>
            <styles.SegmentedControl>
              <styles.SegmentButton 
                $active={appearanceMode === 'light'}
                onClick={() => setAppearanceMode('light')}
              >
                {t('config.light')}
              </styles.SegmentButton>
              <styles.SegmentButton 
                $active={appearanceMode === 'dark'}
                onClick={() => setAppearanceMode('dark')}
              >
                {t('config.dark')}
              </styles.SegmentButton>
              <styles.SegmentButton 
                $active={appearanceMode === 'auto'}
                onClick={() => setAppearanceMode('auto')}
              >
                {t('config.system')}
              </styles.SegmentButton>
            </styles.SegmentedControl>
          </styles.SectionContent>
        </styles.Section>
        
        {/* Language Section */}
        <styles.Section>
          <styles.SectionHeader>{t('config.language')}</styles.SectionHeader>
          <styles.SectionContent>
            <styles.SettingLabel>
              <span>{t('config.language')}</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>{t('config.language_desc')}</span>
            </styles.SettingLabel>
            <styles.LanguageSelector>
              <styles.LanguageButton 
                $active={language === 'es'}
                onClick={() => setLanguage('es')}
              >
                Español
              </styles.LanguageButton>
              <styles.LanguageButton 
                $active={language === 'en'}
                onClick={() => setLanguage('en')}
              >
                English
              </styles.LanguageButton>
            </styles.LanguageSelector>
          </styles.SectionContent>
        </styles.Section>
        
        {/* Tags Section */}
        <styles.Section>
          <styles.SectionHeader>{t('config.tags')}</styles.SectionHeader>
          <styles.SectionContent>
            <styles.TagInputRow>
              <styles.TagInputStyled
                placeholder={t('config.new_tag')}
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddTag(newTag, setNewTag);
                  }
                }}
              />
              <styles.AddButton 
                onClick={() => handleAddTag(newTag, setNewTag)}
                disabled={!newTag.trim()}
              >
                <AddIcon size={20} />
              </styles.AddButton>
            </styles.TagInputRow>
            
            {tags.length > 0 && (
              <styles.TagList>
                {tags.map((tag, index) => (
                  <styles.TagChip key={index}>
                    <span>{tag}</span>
                    <styles.RemoveButton onClick={() => handleRemoveTag(tag)}>
                      ×
                    </styles.RemoveButton>
                  </styles.TagChip>
                ))}
              </styles.TagList>
            )}
          </styles.SectionContent>
        </styles.Section>
        
        {/* About Section */}
        <styles.AboutSection>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img 
              src="/Linkio-icon.png"
              alt="LinkIO"
              style={{ 
                width: 48, 
                height: 48, 
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                objectFit: 'cover',
                backgroundColor: 'var(--color-card-bg)'
              }}
            />
            <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {t('config.about')}
            </span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 8 }}>
            {t('config.about_desc')}
          </p>
          <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 8 }}>
            {t('config.version')} {APP_VERSION} • {t('config.developed')}{' '}
            <a href="https://github.com/ismaelmarot" target="_blank" rel="noopener noreferrer">
              Ismael Marot
            </a>
            {' '}• {t('config.rights')}
          </div>
        </styles.AboutSection>
        
        {/* Save Button */}
        <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '40px' }}>
          <button
            type='button'
            onClick={handleSaveSettings}
            disabled={isSaving}
            style={{
              width: '100%',
              padding: '16px 32px',
              background: isSaving ? '#e0e0e0' : 'linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)',
              color: isSaving ? '#666' : 'white',
              border: 'none',
              borderRadius: '34px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isSaving ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {isSaving ? t('config.saving') : t('config.save')}
          </button>
        </div>
      </div>
    </styles.Container>
  )
}

export default ConfigView