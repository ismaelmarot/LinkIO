import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type TranslationKey = string;
type Translations = Record<TranslationKey, string>;

const translations: Record<string, Translations> = {
  es: {
    'home.title': 'LinkIO',
    'home.add': 'Agregar',
    'home.search': 'Buscar enlaces...',
    'home.no_links': 'No hay enlaces',
    'home.no_links_desc': 'Comienza agregando tu primer enlace para construir tu biblioteca personal.',
    'home.see_more': 'Ver más',
    'home.enlaces': 'enlaces',
    'home.enlace': 'enlace',
    'home.delete_confirm': '¿Eliminar enlace?',
    'home.delete_warning': '¿Estás seguro de eliminar',
    'home.cancel': 'Cancelar',
    'home.delete': 'Eliminar',
    'home.tag_all': 'Todos',
    'home.tag_favorites': 'Favoritos',
    'home.tag_work': 'Trabajo',
    'home.tag_personal': 'Personal',
    
    'add.title': 'Agregar',
    'add.url': 'Enlace',
    'add.icon': 'Icono',
    'add.title_field': 'Título',
    'add.title_placeholder': 'Título del enlace',
    'add.subtitle': 'Subtítulo',
    'add.subtitle_placeholder': 'Subtítulo opcional',
    'add.description': 'Descripción',
    'add.description_placeholder': 'Descripción...',
    'add.note': 'Nota',
    'add.note_placeholder': 'Nota personal...',
    'add.image': 'Imagen',
    'add.tags': 'Etiquetas',
    'add.cancel': 'Cancelar',
    'add.save': 'Guardar',
    'add.get_preview': 'Obtener vista previa',
    'add.upload_image': 'Subir imagen',
    'add.get_from_url': 'Se obtendrá de la URL',
    'add.new_tag_prompt': 'Nueva etiqueta:',
    
    'edit.title': 'Editar',
    'edit.cancel': 'Cancelar',
    'edit.save': 'Guardar',
    'edit.saving': 'Guardando...',
    'edit.get_preview': 'Obtener vista previa',
    
    'detail.back': 'Atrás',
    'detail.url': 'Enlace',
    'detail.open': 'Abrir enlace',
    'detail.edit': 'Editar',
    'detail.delete': 'Eliminar',
    'detail.delete_confirm': '¿Eliminar enlace?',
    'detail.delete_warning': 'Esta acción no se puede deshacer.',
    'detail.cancel': 'Cancelar',
    'detail.description': 'Descripción',
    'detail.note': 'Nota personal',
    'detail.added': 'Agregado el',
    'detail.more_options': 'Más opciones',
    'detail.less_options': 'Menos opciones',
    
    'detail.loading': 'Cargando...',
    'detail.error': 'Error',
    'detail.not_found': 'No encontrado',
    'detail.not_exist': 'El enlace no existe o fue eliminado.',
    'detail.back_home': 'Volver al inicio',
    'detail.link': 'Enlace',
    'detail.copy': 'Copiar',
    'detail.copied': '¡Copiado!',
    'detail.added_on': 'Agregado el',
    'detail.deleting': 'Eliminando...',
    
    'config.title': 'Configuración',
    'config.appearance': 'Apariencia',
    'config.mode': 'Modo',
    'config.mode_desc': 'Selecciona entre claro, oscuro o automático',
    'config.language': 'Idioma',
    'config.language_desc': 'Selecciona el idioma de la interfaz',
    'config.tags': 'Etiquetas',
    'config.new_tag': 'Nuevo tag...',
    'config.add_tag': 'Agregar etiqueta',
    'config.about': 'Acerca de LinkIO',
    'config.about_desc': 'LinkIO es tu gestor personal de enlaces organizado y visual. Guarda, categoriza y accede rápidamente a todos tus enlaces favoritos con una interfaz limpia y moderna inspirada en el diseño de Apple.',
    'config.save': 'Guardar Configuración',
    'config.saving': 'Guardando...',
    'config.version': 'Versión',
    'config.developed': 'Desarrollado por',
    'config.rights': 'Todos los derechos reservados',
    'config.light': 'Claro',
    'config.dark': 'Oscuro',
    'config.system': 'Automático',
    
    'nav.home': 'Inicio',
    'nav.add': 'Agregar',
    'nav.config': 'Ajustes',
  },
  en: {
    'home.title': 'LinkIO',
    'home.add': 'Add',
    'home.search': 'Search links...',
    'home.no_links': 'No links',
    'home.no_links_desc': 'Start by adding your first link to build your personal library.',
    'home.see_more': 'See more',
    'home.enlaces': 'links',
    'home.enlace': 'link',
    'home.delete_confirm': 'Delete link?',
    'home.delete_warning': 'Are you sure to delete',
    'home.cancel': 'Cancel',
    'home.delete': 'Delete',
    'home.tag_all': 'All',
    'home.tag_favorites': 'Favorites',
    'home.tag_work': 'Work',
    'home.tag_personal': 'Personal',
    
    'add.title': 'Add',
    'add.url': 'Link',
    'add.icon': 'Icon',
    'add.title_field': 'Title',
    'add.title_placeholder': 'Link title',
    'add.subtitle': 'Subtitle',
    'add.subtitle_placeholder': 'Optional subtitle',
    'add.description': 'Description',
    'add.description_placeholder': 'Description...',
    'add.note': 'Note',
    'add.note_placeholder': 'Personal note...',
    'add.image': 'Image',
    'add.tags': 'Tags',
    'add.cancel': 'Cancel',
    'add.save': 'Save',
    'add.get_preview': 'Get preview',
    'add.upload_image': 'Upload image',
    'add.get_from_url': 'Will be obtained from URL',
    'add.new_tag_prompt': 'New tag:',
    
    'edit.title': 'Edit',
    'edit.cancel': 'Cancel',
    'edit.save': 'Save',
    'edit.saving': 'Saving...',
    'edit.get_preview': 'Get preview',
    
    'detail.back': 'Back',
    'detail.url': 'Link',
    'detail.open': 'Open link',
    'detail.edit': 'Edit',
    'detail.delete': 'Delete',
    'detail.delete_confirm': 'Delete link?',
    'detail.delete_warning': 'This action cannot be undone.',
    'detail.cancel': 'Cancel',
    'detail.description': 'Description',
    'detail.note': 'Personal note',
    'detail.added': 'Added on',
    'detail.more_options': 'More options',
    'detail.less_options': 'Less options',
    
    'detail.loading': 'Loading...',
    'detail.error': 'Error',
    'detail.not_found': 'Not found',
    'detail.not_exist': 'The link does not exist or was deleted.',
    'detail.back_home': 'Back to home',
    'detail.link': 'Link',
    'detail.copy': 'Copy',
    'detail.copied': 'Copied!',
    'detail.added_on': 'Added on',
    'detail.deleting': 'Deleting...',
    
    'config.title': 'Settings',
    'config.appearance': 'Appearance',
    'config.mode': 'Mode',
    'config.mode_desc': 'Select between light, dark or automatic',
    'config.language': 'Language',
    'config.language_desc': 'Select the interface language',
    'config.tags': 'Tags',
    'config.new_tag': 'New tag...',
    'config.add_tag': 'Add tag',
    'config.about': 'About LinkIO',
    'config.about_desc': 'LinkIO is your organized and visual link manager. Save, categorize and quickly access all your favorite links with a clean and modern interface inspired by Apple design.',
    'config.save': 'Save Settings',
    'config.saving': 'Saving...',
    'config.version': 'Version',
    'config.developed': 'Developed by',
    'config.rights': 'All rights reserved',
    'config.light': 'Light',
    'config.dark': 'Dark',
    'config.system': 'System',
    
    'nav.home': 'Home',
    'nav.add': 'Add',
    'nav.config': 'Settings',
  }
};

type I18nContextType = {
  t: (key: TranslationKey) => string;
  language: string;
  setLanguage: (lang: string) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('linkio-language') || 'es';
  });

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('linkio-language', lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations['es'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};