import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useUser, useAuth } from '@clerk/clerk-react'
import { Navbar } from '../shared/components/Navbar'
import { OfflineBanner } from '../shared/components/OfflineBanner'
import { useNetworkStatus } from '../shared/hooks/useNetworkStatus'
import { useAuthStore } from '../store/authStore'
import { sync } from '../lib/sync'
import { Loading, Main, Wrapper } from './App.styles'

const publicRoutes = ["/login", "/register"]

const App = () => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { getToken } = useAuth()
  const syncFromClerk = useAuthStore((s) => s.syncFromClerk)
  const navigate = useNavigate()
  const location = useLocation()
  const { isOnline } = useNetworkStatus()

  useEffect(() => {
    if (isOnline) {
      sync.processQueue()
    }
  }, [isOnline])

  useEffect(() => {
    if (!isLoaded) return

    if (isSignedIn && user) {
      getToken().then((token) => {
        syncFromClerk(
          {
            id: user.id,
            email: user.primaryEmailAddress?.emailAddress ?? "",
            name: user.fullName ?? "",
          },
          token
        )
      })
    } else {
      syncFromClerk(null, null)
    }
  }, [isLoaded, isSignedIn, user, getToken, syncFromClerk])

  useEffect(() => {
    if (!isLoaded) return
    if (!isSignedIn && !publicRoutes.includes(location.pathname)) {
      navigate("/login")
    }
  }, [isLoaded, isSignedIn, location.pathname, navigate])

  if (!isLoaded) {
    return <Loading>Cargando...</Loading>
  }

  return (
    <Wrapper>
      {!isOnline && <OfflineBanner />}
      <Main>
        <Outlet />
        <Navbar />
      </Main>
    </Wrapper>
  )
}

export default App