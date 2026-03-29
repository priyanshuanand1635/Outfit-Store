import { useState, useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { ChevronDown, Sliders } from 'lucide-react'

const ShopLayout = ({ theme, category, setCategory, sortBy, setSortBy, filteredProducts }) => {
  const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories']
  const sorts = ['New Arrivals', 'Price Low-High', 'Price High-Low', 'Best Sellers']

  return (
    <div className="bg-theme-bg min-h-screen pt-32 pb-48 px-6 md:px-12">
      {/* HEADER */}
      <header className="mb-20">
        {theme === 'streetwear' ? (
          <h1 className="text-7xl md:text-9xl font-headline font-black italic uppercase text-white tracking-tighter leading-none">
            THE <span className="text-theme-primary">ARCHIVE</span>
          </h1>
        ) : theme === 'luxury' ? (
          <h1 className="font-headline font-light text-5xl md:text-7xl text-theme-on-surface tracking-tight">
            The Collection
          </h1>
        ) : (
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-theme-on-surface">
            Shop All 🛍️
          </h1>
        )}
      </header>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 px-2">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`
                px-6 py-2.5 text-[10px] uppercase font-bold tracking-widest transition-all
                ${theme === 'streetwear' ? `
                  ${category === cat ? 'bg-theme-primary text-black' : 'text-zinc-500 border border-zinc-800 hover:border-theme-primary'}
                ` : theme === 'luxury' ? `
                  ${category === cat ? 'border-b-2 border-theme-primary text-theme-primary' : 'text-theme-outline-var hover:text-theme-primary border-b-2 border-transparent'}
                ` : `
                  rounded-full ${category === cat ? 'bg-theme-primary text-white shadow-md' : 'bg-theme-surface-mid text-theme-on-surface-var hover:bg-theme-primary/10'}
                `}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative group w-full md:w-auto">
          <div className={`
             flex items-center gap-4 px-6 py-2.5 text-[10px] uppercase font-bold tracking-widest cursor-pointer
             ${theme === 'streetwear' ? 'border border-zinc-800 text-white hover:border-theme-primary' : theme === 'luxury' ? 'border-b border-theme-outline-var' : 'rounded-full bg-white shadow-sm'}
          `}>
            <Sliders className="w-3 h-3" />
            <span>Sort: {sortBy}</span>
            <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
          </div>

          <div className="absolute top-full right-0 mt-2 min-w-[200px] w-full bg-theme-surface shadow-2xl z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all border border-theme-outline-var/10">
            {sorts.map(s => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className="w-full text-left px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-theme-on-surface hover:bg-theme-primary hover:text-white transition-colors border-b border-theme-outline-var/5 last:border-0"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default function Shop() {
  const { theme } = useTheme()
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('New Arrivals')

  const filteredProducts = useMemo(() => {
    let result = category === 'All' ? [...products] : products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    if (sortBy === 'Price Low-High') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'Price High-Low') result.sort((a, b) => b.price - a.price)
    return result
  }, [category, sortBy])

  return (
    <>
      {theme === 'streetwear' && <ShopLayout theme="streetwear" category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} filteredProducts={filteredProducts} />}
      {theme === 'luxury' && <ShopLayout theme="luxury" category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} filteredProducts={filteredProducts} />}
      {theme === 'casual' && <ShopLayout theme="casual" category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} filteredProducts={filteredProducts} />}
    </>
  )
}
