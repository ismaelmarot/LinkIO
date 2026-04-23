import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api/links';

export const useSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [tags, setTags] = useState<string[]>(['Todos']);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(API_URL);
        const links = await response.json();
        
        const allTags = new Set<string>(['Todos']);
        links.forEach((link: any) => {
          if (link.tags && Array.isArray(link.tags)) {
            link.tags.forEach((tag: any) => {
              const tagName = typeof tag === 'string' ? tag : tag.name;
              if (tagName) allTags.add(tagName);
            });
          }
        });
        
        setTags(Array.from(allTags));
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    activeTag,
    setActiveTag,
    tags,
  };
};