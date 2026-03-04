import { useState } from 'react'
import { LandingPage } from './pages/LandingPage'
import { DashboardPage } from './pages/DashboardPage'

type Page = 'landing' | 'dashboard'

function App() {
  const [page, setPage] = useState<Page>('landing')

  if (page === 'dashboard') {
    return <DashboardPage />
  }

  return <LandingPage onNavigate={(p) => setPage(p as Page)} />
}

export default App
