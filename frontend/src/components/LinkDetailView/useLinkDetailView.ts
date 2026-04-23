import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:3001/api/links';

export const useLinkDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const [link, setLink] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        const data = await response.json();
        setLink(data);
      } catch (err) {
        setError('Error al cargar el enlace');
      } finally {
        setLoading(false);
      }
    };

    fetchLink();
  }, [id]);

  return {
    link,
    loading,
    error
  };
};