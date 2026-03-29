import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import About from './pages/About'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { theme } = useTheme()

  return (
    <div 
      className="min-h-screen transition-colors duration-theme" 
      style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-on-surface)' }}
    >
      <Navbar />
      <main className="pt-24 min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <ThemeSwitcher />
      <Footer />
    </div>
  )
}
