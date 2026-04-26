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

export const useSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [tags, setTags] = useState<string[]>(['All']);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const links = await api()?.getAll() || [];
        
        const allTags = new Set<string>(['All']);
        links.forEach((link: any) => {
          if (link.tags) {
            let tagArray = link.tags;
            if (typeof tagArray === 'string') {
              try {
                tagArray = JSON.parse(tagArray);
              } catch {
                tagArray = [];
              }
            }
            if (Array.isArray(tagArray)) {
              tagArray.forEach((tag: any) => {
                const tagName = typeof tag === 'string' ? tag : tag.name;
                if (tagName) allTags.add(tagName);
              });
            }
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