import { useState } from 'react';
import { useI18n } from '../../app/i18n';

export const useConfigView = () => {
  const { t, language: i18nLanguage, setLanguage } = useI18n();
  const [appearanceMode, setAppearanceMode] = useState<'light' | 'dark' | 'auto'>('auto');
  const [tags, setTags] = useState<string[]>(['All', 'Favorites']);
  const [newTag, setNewTag] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const applyTheme = (mode: 'light' | 'dark' | 'auto') => {
    if (mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', mode);
    }
    localStorage.setItem('linkio-appearance-mode', mode);
  };

  const handleAppearanceChange = (mode: 'light' | 'dark' | 'auto') => {
    setAppearanceMode(mode);
    applyTheme(mode);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const handleNewTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const handleAddTag = () => {
    const tag = newTag.trim();
    if (tag && !tags.includes(tag)) {
      setTags(prev => [...prev, tag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    if (tagToRemove !== 'All' && tagToRemove !== 'Favorites') {
      setTags(prev => prev.filter(tag => tag !== tagToRemove));
    }
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Settings saved');
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return {
    appearanceMode,
    setAppearanceMode: handleAppearanceChange,
    language: i18nLanguage,
    setLanguage: handleLanguageChange,
    tags,
    newTag,
    setNewTag: handleNewTagChange,
    isSaving,
    handleAddTag,
    handleRemoveTag,
    handleSaveSettings,
    t
  };
};