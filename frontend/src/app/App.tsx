import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { I18nProvider } from './i18n'
import HomeView from '../components/HomeView/HomeView'
import AddView from '../components/AddView/AddView'
import ConfigView from '../components/ConfigView/ConfigView'
import LinkDetailView from '../components/LinkDetailView/LinkDetailView'
import EditLinkView from '../components/EditLinkView/EditLinkView'
import BottomNav from '../components/BottomNav/BottomNav'

const App: React.FC = () => {
  return (
    <I18nProvider>
      <Router>
        <Routes>
          {/* Home route */}
          <Route 
            path='/' 
            element={(
              <>
                <HomeView />
                <BottomNav />
              </>
            )} 
          />
          
          {/* Add link route */}
          <Route 
            path='/add' 
            element={(
              <>
                <AddView />
                <BottomNav />
              </>
            )} 
          />
          
          {/* Config route */}
          <Route 
            path='/config' 
            element={(
              <>
                <ConfigView />
                <BottomNav />
              </>
            )} 
          />
          
          {/* Detail link route */}
          <Route path='/link/:id' element={<LinkDetailView />} />
          
          {/* Edit link route */}
          <Route path='/link/:id/edit' element={<EditLinkView />} />
          
          {/* Redirect unknown routes to home */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </I18nProvider>
  )
}

export default App