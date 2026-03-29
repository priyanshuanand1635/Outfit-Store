import { useTheme } from '../context/ThemeContext'
import { Zap, Gem, Shirt, ShoppingBag } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  return (
    <>
      {/* Desktop Theme Switcher */}
      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-zinc-900/80 backdrop-blur-xl rounded-full px-2 py-2 border border-white/5 shadow-2xl flex items-center gap-1">
          {['streetwear', 'luxury', 'casual'].map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`
                px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300
                ${theme === t 
                  ? 'bg-theme-primary text-theme-on-primary shadow-[0_0_20px_rgba(204,255,0,0.2)]' 
                  : 'text-zinc-500 hover:text-white'
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="bg-zinc-900/90 backdrop-blur-2xl rounded-full px-2 py-2 shadow-2xl flex justify-between items-center border border-white/5 overflow-hidden">
          <button
            onClick={() => setTheme('streetwear')}
            className={`flex flex-col items-center flex-1 py-1.5 transition-all
              ${theme === 'streetwear' ? 'bg-theme-primary text-black rounded-full' : 'text-zinc-500'}
            `}
          >
            <Zap className="w-5 h-5" />
            <span className="text-[9px] font-bold tracking-tighter uppercase mt-0.5">Street</span>
          </button>
          
          <button
            onClick={() => setTheme('luxury')}
            className={`flex flex-col items-center flex-1 py-1.5 transition-all
              ${theme === 'luxury' ? 'bg-theme-primary text-black rounded-full' : 'text-zinc-500'}
            `}
          >
            <Gem className="w-5 h-5" />
            <span className="text-[9px] font-bold tracking-tighter uppercase mt-0.5">Luxury</span>
          </button>

          <button
            onClick={() => setTheme('casual')}
            className={`flex flex-col items-center flex-1 py-1.5 transition-all
              ${theme === 'casual' ? 'bg-theme-primary text-black rounded-full' : 'text-zinc-500'}
            `}
          >
            <Shirt className="w-5 h-5" />
            <span className="text-[9px] font-bold tracking-tighter uppercase mt-0.5">Casual</span>
          </button>

          <Link
            to="/cart"
            className={`flex flex-col items-center flex-1 py-1.5 transition-all
              ${location.pathname === '/cart' ? 'bg-theme-primary text-black rounded-full' : 'text-zinc-500'}
            `}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-[9px] font-bold tracking-tighter uppercase mt-0.5">Bag</span>
          </Link>
        </div>
      </div>
    </>
  )
}
