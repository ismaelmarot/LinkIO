import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as styles from './BottomNav.styles';
import { HomeIcon, AddIcon, ConfigIcon } from '../../constants/icons.constants';
import { useI18n } from '../../app/i18n';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useI18n();

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
<styles.Label $active={getActiveState('/')}>{t('nav.home')}</styles.Label>
      </styles.TabButton>
      
      <styles.TabButton $active={getActiveState('/add')} onClick={() => navigate('/add')}>
        <AddIcon size={24} />
        <styles.Label $active={getActiveState('/add')}>{t('nav.add')}</styles.Label>
      </styles.TabButton>
      
      <styles.TabButton $active={getActiveState('/config')} onClick={() => navigate('/config')}>
        <ConfigIcon size={24} />
        <styles.Label $active={getActiveState('/config')}>{t('nav.config')}</styles.Label>
      </styles.TabButton>
    </styles.Container>
  );
};

export default BottomNav;