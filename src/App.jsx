import { Routes, Route } from 'react-router-dom'
import DashboardPage from './components/pages/DashboardPage'
import ProductsOverviewPage from './components/pages/ProductsOverviewPage'
import RegisterAdminPage from './components/pages/RegisterAdminPage'
import LoginPage from './components/pages/LoginPage'

const App = () => {
  return (
      <>
         <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/products' element={<ProductsOverviewPage />} />
            <Route path='/register' element={<RegisterAdminPage />} />
            <Route path='/login' element={<LoginPage />} />
         </Routes>
      </>
  )
}

export default App
