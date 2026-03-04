import { useState } from 'react'
import { LandingPage } from './pages/LandingPage'
import { AuthPage } from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'

type Page = 'landing' | 'auth' | 'dashboard'

function App() {
  const [page, setPage] = useState<Page>('landing')
  const navigate = (p: string) => setPage(p as Page)

  if (page === 'dashboard') return <DashboardPage />
  if (page === 'auth') return <AuthPage onNavigate={navigate} />
  return <LandingPage onNavigate={navigate} />
}

export default App
