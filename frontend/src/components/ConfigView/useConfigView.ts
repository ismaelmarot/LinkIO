import { useState } from 'react';

export const useConfigView = () => {
  const [appearanceMode, setAppearanceMode] = useState<'light' | 'dark' | 'auto'>('auto');
  const [language, setLanguage] = useState('es');
  const [tags, setTags] = useState<string[]>(['All', 'Favorites']);
  const [newTag, setNewTag] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Appearance mode handlers
  const handleAppearanceChange = (mode: 'light' | 'dark' | 'auto') => {
    setAppearanceMode(mode);
    // In a real app, you'd save this to preferences and apply the theme
    applyTheme(mode);
  };

  const applyTheme = (mode: 'light' | 'dark' | 'auto') => {
    if (mode === 'auto') {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', mode);
    }
    
    // Save to localStorage
    localStorage.setItem('linkio-appearance-mode', mode);
  };

  // Language handlers
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // In a real app, you'd save this and reload translations
    localStorage.setItem('linkio-language', lang);
  };

  // Tags handlers
  const handleNewTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const handleAddTag = () => {
    const tag = newTag.trim();
    if (tag && !tags.includes(tag)) {
      setTags(prev => [...prev, tag]);
      setNewTag('');
      // In a real app, you'd save this to backend
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    if (tagToRemove !== 'All' && tagToRemove !== 'Favorites') {
      setTags(prev => prev.filter(tag => tag !== tagToRemove));
      // In a real app, you'd save this to backend
    }
  };

  // Initialize from localStorage
  // In a real app, you'd also fetch from backend
  // useEffect(() => {
  //   const savedAppearance = localStorage.getItem('linkio-appearance-mode') as 'light' | 'dark' | 'auto' | null;
  //   if (savedAppearance) {
  //     setAppearanceMode(savedAppearance);
  //     applyTheme(savedAppearance);
  //   }
  //   
  //   const savedLanguage = localStorage.getItem('linkio-language');
  //   if (savedLanguage) {
  //     setLanguage(savedLanguage);
  //   }
  // }, []);

  // Mock save function
  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd send this data to your backend
      const settings = {
        appearanceMode,
        language,
        tags
      };
      
      console.log('Settings to save:', settings);
      
      // Show success message (in a real app, you'd use a toast or similar)
      alert('Configuración guardada correctamente');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error al guardar la configuración');
    } finally {
      setIsSaving(false);
    }
  };

  return {
    appearanceMode,
    setAppearanceMode: handleAppearanceChange,
    language,
    setLanguage: handleLanguageChange,
    tags,
    newTag,
    setNewTag: handleNewTagChange,
    isSaving,
    handleAddTag,
    handleRemoveTag,
    handleSaveSettings
  };
};