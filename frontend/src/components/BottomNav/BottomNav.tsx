import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as styles from './BottomNav.styles';
import { HomeIcon, AddIcon, ConfigIcon } from '../../constants/icons.constants';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveState = (path: string): boolean => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <styles.Container>
      <styles.TabButton 
        $active={getActiveState('/')} 
        onClick={() => navigate('/')}
      >
        <HomeIcon size={22} color={getActiveState('/') ? 'var(--color-primary)' : 'var(--color-text-secondary)'} />
        <styles.Label $active={getActiveState('/')}>Inicio</styles.Label>
      </styles.TabButton>

      <styles.TabButton 
        $active={getActiveState('/add')} 
        onClick={() => navigate('/add')}
      >
        <AddIcon size={22} color={getActiveState('/add') ? 'var(--color-primary)' : 'var(--color-text-secondary)'} />
        <styles.Label $active={getActiveState('/add')}>Agregar</styles.Label>
      </styles.TabButton>

      <styles.TabButton 
        $active={getActiveState('/config')} 
        onClick={() => navigate('/config')}
      >
        <ConfigIcon size={22} color={getActiveState('/config') ? 'var(--color-primary)' : 'var(--color-text-secondary)'} />
        <styles.Label $active={getActiveState('/config')}>Ajustes</styles.Label>
      </styles.TabButton>
    </styles.Container>
  );
};

export default BottomNav;