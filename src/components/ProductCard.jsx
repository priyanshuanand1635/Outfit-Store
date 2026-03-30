import { Link } from 'react-router-dom'
import { ShoppingBag, Eye } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { theme } = useTheme()
  const { addToCart } = useCart()

  if (theme === 'streetwear') {
    return (
      <div className="group relative bg-zinc-900 overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden bg-zinc-950">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
            loading="lazy"
          />
          {product.tag && (
            <span className="absolute top-4 left-4 bg-theme-primary text-black text-[10px] font-black uppercase px-3 py-1 z-10">
              {product.tag}
            </span>
          )}
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
            <button 
              onClick={() => addToCart(product, product.sizes[0])}
              className="bg-theme-primary text-black font-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              Add to Cart
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="border border-white text-white font-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Quick View
            </Link>
          </div>
        </div>
        
        <div className="p-4 flex flex-col items-center">
          <Link to={`/product/${product.id}`} className="font-headline font-black uppercase tracking-tight text-xl text-white group-hover:text-theme-primary transition-colors">
            {product.name}
          </Link>
          <span className="font-headline font-black text-theme-primary text-2xl mt-1">
            ${product.price}
          </span>
        </div>
      </div>
    )
  }

  if (theme === 'luxury') {
    const imgSrc = product.luxuryImage || product.image
    return (
      <div className="group relative overflow-hidden bg-[#faf9f6]" style={{ border: '1px solid rgba(180,160,120,0.25)' }}>
        {/* Image container with editorial aspect ratio */}
        <div className="aspect-[3/4] overflow-hidden relative bg-[#f5f2ec]">
          <img 
            src={imgSrc}
            alt={product.name} 
            className="w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-108"
            loading="lazy"
            style={{ transform: 'scale(1)', transition: 'transform 1.5s cubic-bezier(0.25,0.46,0.45,0.94)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />

          {/* Subtle dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Tag badge — gold foil style */}
          {product.tag && (
            <span className="absolute top-5 left-5 text-[9px] uppercase tracking-[0.3em] px-3 py-1.5 font-medium"
              style={{ background: 'rgba(180,155,100,0.15)', color: '#a0845a', border: '1px solid rgba(180,155,100,0.3)', backdropFilter: 'blur(8px)' }}
            >
              {product.tag}
            </span>
          )}

          {/* Hover CTA — slides up from bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}>
            <button 
              onClick={() => addToCart(product, product.sizes[0])}
              className="w-full py-3.5 text-[10px] uppercase tracking-[0.35em] font-medium text-white transition-all duration-300 hover:opacity-80"
              style={{ background: 'rgba(180,155,100,0.85)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              Add to Maison
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="w-full py-3 text-[9px] uppercase tracking-[0.35em] font-medium text-center transition-all duration-300 hover:opacity-80"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.9)' }}
            >
              View Details
            </Link>
          </div>
        </div>
        
        {/* Info panel — refined editorial */}
        <div className="px-6 py-5 text-center" style={{ borderTop: '1px solid rgba(180,160,120,0.2)' }}>
          <span className="block text-[8px] uppercase tracking-[0.4em] mb-2" style={{ color: '#a0845a', letterSpacing: '0.35em' }}>
            {product.category}
          </span>
          <Link to={`/product/${product.id}`} 
            className="block font-light text-base transition-colors duration-300"
            style={{ fontFamily: 'Georgia, serif', color: '#2c2820', letterSpacing: '0.02em' }}
            onMouseEnter={e => e.currentTarget.style.color = '#a0845a'}
            onMouseLeave={e => e.currentTarget.style.color = '#2c2820'}
          >
            {product.name}
          </Link>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px flex-1 opacity-30" style={{ background: 'linear-gradient(to right, transparent, #a0845a)' }} />
            <span className="text-sm font-light tracking-widest" style={{ color: '#6b5636' }}>
              ${product.price.toLocaleString()}
            </span>
            <div className="h-px flex-1 opacity-30" style={{ background: 'linear-gradient(to left, transparent, #a0845a)' }} />
          </div>
        </div>
      </div>
    )
  }

  // CASUAL
  return (
    <div className="group bg-white rounded-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
          <button 
            onClick={() => addToCart(product, product.sizes[0])}
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-theme-primary hover:bg-theme-primary hover:text-white transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-theme-primary hover:bg-theme-primary hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`} className="font-display font-bold text-lg text-theme-on-surface hover:text-theme-primary transition-colors">
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-theme-primary text-xl">
            ${product.price}
          </span>
          <button 
            onClick={() => addToCart(product, product.sizes[0])}
            className="bg-gradient-to-r from-theme-primary to-theme-primary-dim text-white text-[10px] font-bold uppercase px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
