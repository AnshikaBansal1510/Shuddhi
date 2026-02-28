import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import UserLogin from './pages/UserLogin'
import UserDashboard from './pages/UserDashboard'
import UploadWaste from './pages/UploadWaste'
import CollectorLogin from './pages/CollectorLogin'
import CollectorDashboard from './pages/CollectorDashboard'
import ImpactPage from './pages/ImpactPage'
import RewardsPage from './pages/RewardsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const page = event.state?.page || 'home'
      setCurrentPage(page)
    }

    // Listen for browser back/forward button clicks
    window.addEventListener('popstate', handlePopState)

    // Set initial state in browser history
    window.history.replaceState({ page: 'home' }, '', window.location.href)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    console.log("Navigating to : " + page);
    // Update browser history
    window.history.pushState({ page }, '', window.location.href)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />
      case 'impact':
        return <ImpactPage onNavigate={navigateTo} />  
      case 'reward':
        return <RewardsPage onNavigate={navigateTo} />  
      case 'user-login':
        return <UserLogin onNavigate={navigateTo} />
      case 'user-dashboard':
        return <UserDashboard onNavigate={navigateTo} />
      case 'upload-waste':
        return <UploadWaste onNavigate={navigateTo} />
      case 'collector-login':
        return <CollectorLogin onNavigate={navigateTo} />
      case 'collector-dashboard':
        return <CollectorDashboard onNavigate={navigateTo} />
      default:
        return <HomePage onNavigate={navigateTo} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App