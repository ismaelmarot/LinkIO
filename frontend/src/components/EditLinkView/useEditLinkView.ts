import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3001/api/links';

export const useEditLinkView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>(['Favorites', 'Work', 'Personal']);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [iconUrl, setIconUrl] = useState<string | null>(null);
  const [isFetchingPreview, setIsFetchingPreview] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchLink = async () => {
      if (!id) {
        setError('ID de enlace no proporcionado');
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          setError('Enlace no encontrado');
          return;
        }
        const link = await response.json();
        
        setUrl(link.url);
        setTitle(link.title);
        setSubtitle(link.subtitle || '');
        setDescription(link.description || '');
        setNote(link.note || '');
        setSelectedTags(link.tags || []);
        setImageUrl(link.imageUrl);
        setIconUrl(link.iconUrl);
        
        const linkTags = link.tags || [];
        setAvailableTags(prev => {
          const combined = [...new Set([...prev, ...linkTags])];
          return combined;
        });
      } catch (err) {
        setError('Error al cargar el enlace');
      } finally {
        setLoading(false);
      }
    };

    fetchLink();
  }, [id]);

  useEffect(() => {
    if (!url || url.length < 8) return;
    
    const timer = setTimeout(() => {
      let urlToParse = url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        urlToParse = 'https://' + url;
      }
      
      try {
        const parsedUrl = new URL(urlToParse);
        const hostname = parsedUrl.hostname;
        const autoIconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
        
        if (!title) setTitle(hostname.replace('www.', ''));
        if (!iconUrl) setIconUrl(autoIconUrl);
        if (!imageUrl) setImageUrl(`${API_URL}/screenshot?url=${encodeURIComponent(urlToParse)}`);
      } catch (err) {
        // Ignore invalid URLs
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [url]);

  const validateUrl = () => {
    if (!url.trim()) return 'La URL es obligatoria';
    try {
      let urlToCheck = url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        urlToCheck = 'https://' + url;
      }
      new URL(urlToCheck);
      return '';
    } catch {
      return 'Por favor ingresa una URL válida';
    }
  };

  const validateTitle = () => {
    if (!title.trim()) return 'El título es obligatorio';
    return '';
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const urlError = validateUrl();
    if (urlError) newErrors.url = urlError;
    const titleError = validateTitle();
    if (titleError) newErrors.title = titleError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (errors.url) setErrors(prev => ({ ...prev, url: '' }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (errors.title) setErrors(prev => ({ ...prev, title: '' }));
  };

  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const addNewTag = (tag: string) => {
    if (tag.trim() && !availableTags.includes(tag)) {
      setAvailableTags(prev => [...prev, tag]);
      setSelectedTags(prev => [...prev, tag]);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchLinkPreview = async () => {
    if (!url.trim()) return;
    setIsFetchingPreview(true);
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;
      
      if (!title) setTitle(hostname.replace('www.', ''));
      if (!iconUrl) setIconUrl(`https://www.google.com/s2/favicons?domain=${hostname}&sz=64`);
      if (!imageUrl) setImageUrl(`https://image.thum.io/get/${url}`);
    } catch (error) {
      console.error('Error fetching link preview:', error);
    } finally {
      setIsFetchingPreview(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    
    if (validateForm()) {
      setIsSaving(true);
      try {
        const updatedLinkData = {
          url,
          title,
          subtitle,
          description,
          note,
          tags: selectedTags,
          imageUrl,
          iconUrl
        };
        
        await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedLinkData)
        });
        
        navigate(`/link/${id}`);
      } catch (error) {
        console.error('Error updating link:', error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    setIsDeleting(true);
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      navigate('/');
    } catch (error) {
      console.error('Error deleting link:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
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
    showDeleteConfirm,
    setShowDeleteConfirm,
    isSaving,
    isDeleting,
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
    handleDelete,
    setIconUrl
  };
};