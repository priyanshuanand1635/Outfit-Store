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
    return (
      <div className="group relative bg-theme-surface-low overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          <button 
            onClick={() => addToCart(product, product.sizes[0])}
            className="absolute bottom-0 left-0 w-full bg-theme-primary text-theme-on-primary py-5 text-[10px] uppercase tracking-[0.2em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          >
            Add to Selection
          </button>
        </div>
        
        <div className="p-6 text-center">
          <span className="block text-[10px] uppercase tracking-widest text-theme-outline-var mb-2">
            {product.category}
          </span>
          <Link to={`/product/${product.id}`} className="font-display font-light text-lg text-theme-on-surface hover:text-theme-primary transition-colors">
            {product.name}
          </Link>
          <span className="block font-medium text-theme-on-surface-var mt-2 tracking-widest text-sm">
            ${product.price.toLocaleString()}
          </span>
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
