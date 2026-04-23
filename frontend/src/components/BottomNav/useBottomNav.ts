import { useState } from 'react';

export const useBottomNav = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'add' | 'config'>('home');
  
  return {
    activeTab,
    setActiveTab
  };
};