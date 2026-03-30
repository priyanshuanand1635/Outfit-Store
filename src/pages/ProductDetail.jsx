import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

const ProductDetailLayout = ({ theme, product, selectedSize, setSelectedSize, selectedColor, setSelectedColor, qty, setQty, addToCart }) => {
  return (
    <div className="bg-theme-bg min-h-screen pt-32 pb-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT: GALLERY */}
          <div className="flex flex-col gap-6">
            <div className={`aspect-[3/4] overflow-hidden bg-theme-surface-low ${theme === 'casual' ? 'rounded-card' : ''}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                className={`w-full h-full object-cover transition-all duration-700
                  ${theme === 'streetwear' ? 'grayscale hover:grayscale-0' : 'hover:scale-105'}
                `}
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: INFO */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-theme-primary text-theme-on-primary ${theme === 'casual' ? 'rounded-full' : ''}`}>
                {product.tag}
              </span>
            </div>

            <h1 className={`
              ${theme === 'streetwear' ? 'text-5xl md:text-7xl font-headline font-black italic uppercase tracking-tighter' : theme === 'luxury' ? 'text-4xl md:text-6xl font-headline font-light tracking-[-0.02em]' : 'text-4xl md:text-6xl font-headline font-extrabold'}
              text-theme-on-surface mb-6
            `}>
              {product.name}
            </h1>

            <span className={`text-4xl font-headline font-bold mb-12 block ${theme === 'streetwear' ? 'text-theme-primary' : theme === 'luxury' ? 'text-theme-on-surface' : 'text-theme-primary'}`}>
              ${product.price}
            </span>

            {/* SIZE SELECTOR */}
            <div className="mb-12">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-theme-on-surface-var mb-6">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 text-xs font-black transition-all ${theme === 'streetwear' ? `${selectedSize === size ? 'bg-theme-primary text-black border-theme-primary' : 'border border-zinc-800 text-zinc-500 hover:border-theme-primary'}` : theme === 'luxury' ? `${selectedSize === size ? 'border-b-2 border-theme-primary text-theme-primary' : 'text-theme-outline-var hover:text-theme-primary border-b border-theme-outline-var/20'}` : `rounded-full ${selectedSize === size ? 'bg-theme-primary text-white' : 'bg-theme-surface-mid text-theme-on-surface-var'}`}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => addToCart(product, selectedSize, qty)}
                className={`w-full py-6 text-xl flex items-center justify-center gap-4 transition-all duration-300 ${theme === 'streetwear' ? 'bg-theme-primary text-black font-black uppercase tracking-widest hover:bg-white' : theme === 'luxury' ? 'bg-theme-primary text-theme-on-primary font-medium uppercase tracking-[0.3em] hover:bg-theme-primary-dim' : 'bg-gradient-to-r from-theme-primary to-theme-primary-dim text-white font-bold rounded-full hover:shadow-xl'}`}
              >
                <ShoppingBag className="w-6 h-6" /> Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { theme } = useTheme()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id))
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [qty, setQty] = useState(1)

  if (!product) return <div>Product Not Found</div>

  return (
    <>
      {theme === 'streetwear' && <ProductDetailLayout theme="streetwear" product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} selectedColor={selectedColor} setSelectedColor={setSelectedColor} qty={qty} setQty={setQty} addToCart={addToCart} />}
      {theme === 'luxury' && <ProductDetailLayout theme="luxury" product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} selectedColor={selectedColor} setSelectedColor={setSelectedColor} qty={qty} setQty={setQty} addToCart={addToCart} />}
      {theme === 'casual' && <ProductDetailLayout theme="casual" product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} selectedColor={selectedColor} setSelectedColor={setSelectedColor} qty={qty} setQty={setQty} addToCart={addToCart} />}
    </>
  )
}
