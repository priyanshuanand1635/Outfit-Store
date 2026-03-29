import { Link } from 'react-router-dom'
import { Search, ShoppingBag, User, Menu, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { cartCount } = useCart()

  if (theme === 'streetwear') {
    return (
      <nav className="fixed top-0 w-full h-[80px] z-50 bg-theme-bg/80 backdrop-blur-xl border-b border-white/5 px-6 flex items-center justify-between">
        <div className="flex-1">
          <Search className="w-5 h-5 text-theme-primary cursor-pointer hover:scale-110 transition-transform" />
        </div>
        
        <div className="flex flex-col items-center">
          <Link to="/" className="font-headline font-black italic tracking-tighter uppercase text-2xl text-theme-primary">
            VANGUARD
          </Link>
          <div className="mt-1 bg-zinc-900/50 rounded-full p-1 border border-white/5 flex gap-1">
            {['streetwear', 'luxury', 'casual'].map(t => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`text-[9px] font-black tracking-widest uppercase px-5 py-1.5 transition-all
                  ${theme === t ? 'bg-theme-primary text-black rounded-full' : 'text-zinc-500'}
                `}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-end gap-6 items-center">
          <User className="w-5 h-5 text-theme-primary cursor-pointer hover:scale-110 transition-transform" />
          <Link to="/cart" className="relative group">
            <ShoppingBag className="w-5 h-5 text-theme-primary group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-between">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    )
  }

  if (theme === 'luxury') {
    return (
      <nav className="fixed top-0 w-full h-[96px] z-50 bg-theme-bg/70 backdrop-blur-md border-b border-theme-outline-var/20 px-12 flex items-center justify-between">
        <div className="flex-1 flex items-center gap-8">
          <Menu className="w-5 h-5 text-theme-primary cursor-pointer" />
          <div className="hidden lg:flex gap-6">
            {['Shop', 'Collections', 'Story'].map(item => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-[0.6875rem] uppercase tracking-[0.1em] text-theme-outline-var hover:text-theme-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="font-headline font-light text-3xl tracking-[-0.02em] text-theme-primary">
            VANGUARD
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center gap-8">
          <div className="hidden sm:flex bg-theme-surface-low rounded-full p-1 border border-theme-outline-var/10">
            {['luxury', 'street', 'casual'].map(t => (
              <button
                key={t}
                onClick={() => setTheme(t === 'street' ? 'streetwear' : t)}
                className={`text-[8px] uppercase tracking-widest px-4 py-1.5 transition-all
                  ${theme === (t === 'street' ? 'streetwear' : t) ? 'bg-theme-primary text-theme-on-primary rounded-full' : 'text-theme-outline-var/60'}
                `}
              >
                {t}
              </button>
            ))}
          </div>
          <User className="w-4 h-4 text-theme-primary cursor-pointer" />
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-4 h-4 text-theme-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 text-[8px] font-medium text-theme-primary">
                ({cartCount})
              </span>
            )}
          </Link>
        </div>
      </nav>
    )
  }

  // CASUAL
  return (
    <nav className="fixed top-0 w-full h-[72px] z-50 bg-theme-bg/70 backdrop-blur-md border-b border-theme-outline-var/20 px-8 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-headline font-bold text-xl text-theme-primary">
          The Buoyant Boutique
        </Link>
        <div className="hidden md:flex gap-1 bg-theme-surface-mid rounded-full p-1">
          {['streetwear', 'luxury', 'casual'].map(t => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`text-[9px] font-bold uppercase px-4 py-1.5 transition-all rounded-full
                ${theme === t ? 'bg-theme-primary text-white shadow-sm' : 'text-theme-on-surface-var hover:text-theme-primary'}
              `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Search className="w-5 h-5 text-theme-primary cursor-pointer hover:scale-110 transition-transform" />
        <Heart className="w-5 h-5 text-theme-primary cursor-pointer hover:scale-110 transition-transform" />
        <Link to="/cart" className="relative group">
          <ShoppingBag className="w-5 h-5 text-theme-primary group-hover:scale-110 transition-transform" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-theme-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-between">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
