import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styles from './HomeView.styles'
import { useHomeView } from './useHomeView'
import * as Header from '../Header'
import SearchBar from '../SearchBar'
import LinkCard from '../LinkCard'
import { AddIcon, LinkIcon } from '../../constants/icons.constants'

const HomeView: React.FC = () => {
  const navigate = useNavigate()
  const {
    filteredLinks,
    links,
    deleteLink
  } = useHomeView()
  
  const [deleteConfirm, setDeleteConfirm] = useState<{ id: number; title: string } | null>(null)

  const handleDeleteConfirmYes = async () => {
    if (deleteConfirm) {
      await deleteLink(deleteConfirm.id)
      setDeleteConfirm(null)
    }
  }

  return (
    <styles.Container>
      <styles.TitleRow>
        <styles.Title>LinkIO</styles.Title>
        <Header.ActionButton onClick={() => navigate('/add')}>
          <AddIcon size={18} color='white' />
          Agregar
        </Header.ActionButton>
      </styles.TitleRow>
      
      <styles.Content>
        <SearchBar />
        
        {links.length > 0 && (
          <styles.Divider />
        )}
        
        {filteredLinks.length > 0 ? (
          <>
            <styles.SectionHeader>
              <styles.SectionTitle>
                {filteredLinks.length} {filteredLinks.length === 1 ? 'enlace' : 'enlaces'}
              </styles.SectionTitle>
            </styles.SectionHeader>
            
            <styles.LinksGrid>
              {filteredLinks.map(link => (
                <LinkCard
                  key={link.id}
                  imageUrl={link.imageUrl}
                  title={link.title}
                  url={link.url}
                  iconUrl={link.iconUrl}
                  tags={link.tags}
                  id={link.id}
                />
              ))}
            </styles.LinksGrid>
          </>
        ) : (
          <styles.EmptyState>
            <LinkIcon size={64} />
            <h3>No hay enlaces todavía</h3>
            <p>Comienza agregando tu primer enlace para construir tu biblioteca personal.</p>
          </styles.EmptyState>
        )}
      </styles.Content>

      {deleteConfirm && (
        <div 
          onClick={() => setDeleteConfirm(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '28px',
              width: '90%',
              maxWidth: '360px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
            }}
          >
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              color: 'var(--color-text-primary)',
              margin: '0 0 8px'
            }}>
              ¿Eliminar enlace?
            </h2>
            <p style={{ 
              fontSize: '15px', 
              color: 'var(--color-text-secondary)',
              margin: '0 0 24px'
            }}>
              ¿Estás seguro de eliminar "{deleteConfirm.title}"?
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setDeleteConfirm(null)} 
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  backgroundColor: 'var(--color-background)',
                  color: 'var(--color-text-primary)',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button 
                onClick={handleDeleteConfirmYes} 
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  backgroundColor: 'var(--color-danger)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </styles.Container>
  )
}

export default HomeView