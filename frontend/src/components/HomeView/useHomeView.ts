import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api/links';

export const useHomeView = () => {
  const [links, setLinks] = useState<any[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  }, []);

  useEffect(() => {
    const filtered = links.filter(link => {
      const tagNames = link.tags?.map((t: any) => typeof t === 'string' ? t : t.name) || [];
      const tagMatch = activeTag === 'All' || tagNames.includes(activeTag);
      
      const searchMatch = searchQuery === '' ||
        link.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.url?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return tagMatch && searchMatch;
    });
    
    setFilteredLinks(filtered);
  }, [links, searchQuery, activeTag]);

  const fetchLinks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  const addLink = async (newLink: any) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLink)
      });
      const createdLink = await response.json();
      setLinks(prev => [createdLink, ...prev]);
      return createdLink;
    } catch (error) {
      console.error('Error adding link:', error);
      throw error;
    }
  };

  const deleteLink = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setLinks(prev => prev.filter(link => link.id !== id));
    } catch (error) {
      console.error('Error deleting link:', error);
      throw error;
    }
  };

  return {
    links,
    filteredLinks,
    searchQuery,
    setSearchQuery,
    activeTag,
    setActiveTag,
    addLink,
    deleteLink,
    loading
  };
};