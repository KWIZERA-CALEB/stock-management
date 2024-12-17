import { Routes, Route } from 'react-router-dom'
import DashboardPage from './components/pages/DashboardPage'
import ProductsOverviewPage from './components/pages/ProductsOverviewPage'
import RegisterAdminPage from './components/pages/RegisterAdminPage'
import LoginPage from './components/pages/LoginPage'
import { AuthProvider } from './components/contexts/authContext'
import ProtectedRoute from './components/atoms/ProtectedRoute'
import { ThemeProvider } from './components/contexts/themeContext'
const App = () => {
  return (
      <>
         <ThemeProvider>
            <AuthProvider>
               <Routes>
                  <Route path="/" element={<ProtectedRoute element={<DashboardPage />} />} />
                  <Route path="/products" element={<ProtectedRoute element={<ProductsOverviewPage />} />} />
                  <Route path="/register" element={<ProtectedRoute element={<RegisterAdminPage />} />} />
                  <Route path='/login' element={<LoginPage />} />
               </Routes>
            </AuthProvider>
         </ThemeProvider>
      </>
  )
}

export default App
