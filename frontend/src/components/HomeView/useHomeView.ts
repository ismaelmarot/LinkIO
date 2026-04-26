import { useState, useEffect } from 'react';

declare global {
  interface Window {
    electronAPI: {
      platform: string;
      links: {
        getAll: () => Promise<any[]>;
        get: (id: number) => Promise<any>;
        create: (data: any) => Promise<any>;
        update: (id: number, data: any) => Promise<any>;
        delete: (id: number) => Promise<boolean>;
      };
    };
  }
}

const api = () => window.electronAPI?.links;

function normalizeLink(link: any) {
  let tags = link.tags;
  if (typeof tags === 'string') {
    try {
      tags = JSON.parse(tags);
    } catch {
      tags = [];
    }
  }
  if (!Array.isArray(tags)) tags = [];
  return { ...link, tags };
}

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
      const tagNames = link.tags.map((t: any) => typeof t === 'string' ? t : t.name);
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
      const data = await api()?.getAll();
      setLinks((data || []).map(normalizeLink));
    } catch (error) {
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  const addLink = async (newLink: any) => {
    try {
      const createdLink = await api()?.create(newLink);
      setLinks(prev => [normalizeLink(createdLink), ...prev]);
      return createdLink;
    } catch (error) {
      console.error('Error adding link:', error);
      throw error;
    }
  };

  const deleteLink = async (id: number) => {
    try {
      await api()?.delete(id);
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