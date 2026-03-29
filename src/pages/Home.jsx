import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

// --- STREETWEAR LAYOUT ---
const StreetwearHome = () => (
  <div className="bg-theme-bg min-h-screen">
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1600&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-50 grayscale" 
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-theme-bg/40" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="text-theme-primary font-bold tracking-[0.4em] uppercase text-sm animate-pulse mb-8">
          Limited Release Available
        </span>
        <h1 className="text-7xl md:text-[12rem] font-headline font-black tracking-tighter italic uppercase leading-[0.8]">
          <span className="text-white block">NEW DROP</span>
          <span className="bg-gradient-to-r from-theme-primary to-white bg-clip-text text-transparent">2026</span>
        </h1>
        <Link 
          to="/shop" 
          className="mt-12 group relative bg-theme-primary text-black font-black px-16 py-6 text-2xl uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(204,255,0,0.3)]"
        >
          Explore Collection
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-theme-primary origin-top animate-bounce" />
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="flex flex-col mb-20">
        <span className="text-theme-primary text-xs font-black tracking-widest uppercase mb-4">Curated Selection</span>
        <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase italic text-white leading-none">Featured Artifacts</h2>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-7"><ProductCard product={products[0]} /></div>
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-10">
          <ProductCard product={products[1]} /><ProductCard product={products[2]} />
        </div>
      </div>
    </section>

    <section className="relative w-full py-56 overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute whitespace-nowrap opacity-10 font-headline font-black italic uppercase text-[20rem] animate-marquee">
        SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE SALE
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-5xl md:text-8xl font-headline font-black tracking-tighter italic uppercase text-white leading-none">ARCHIVE SALE UP TO 60% OFF</h2>
        <Link to="/shop" className="mt-12 group relative border-2 border-theme-primary text-theme-primary px-12 py-4 uppercase font-black tracking-widest overflow-hidden transition-colors hover:text-black">
          <span className="relative z-10">Shop the Archive</span>
          <div className="absolute inset-0 bg-theme-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </Link>
      </div>
    </section>

    <section className="w-full flex flex-col lg:flex-row bg-theme-surface-low border-t border-white/5">
      {['Outerwear', 'Footwear', 'Archives'].map((cat, i) => (
        <Link key={cat} to="/shop" className="flex-1 h-[600px] overflow-hidden relative group bg-zinc-950 border-r border-white/5 last:border-r-0">
          <img 
            src={`https://images.unsplash.com/photo-${i === 0 ? '1551028719-01c1eb5fe9b0' : i === 1 ? '1542291026-7eec264c27ff' : '1556821840-3a63f15732ce'}?w=800&auto=format&fit=crop`} 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale"
            alt={cat}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h3 className="text-5xl font-headline font-black italic uppercase tracking-tighter text-white transform group-hover:-translate-y-4 transition-transform duration-500 underline decoration-theme-primary decoration-0 group-hover:decoration-4 underline-offset-8">{cat}</h3>
          </div>
        </Link>
      ))}
    </section>
  </div>
)

// --- LUXURY LAYOUT ---
const LuxuryHome = () => (
  <div className="bg-theme-bg min-h-screen transition-colors duration-theme">
    <section className="h-[90vh] grid grid-cols-1 lg:grid-cols-2 mt-24">
      <div className="flex flex-col justify-center px-12 lg:px-24">
        <h1 className="font-headline font-light text-[5rem] md:text-[8rem] leading-[0.85] tracking-[-0.04em] text-theme-on-surface">LUXE <br /><span className="italic font-light">DROP</span> <br />2026</h1>
        <p className="mt-12 text-theme-outline-var text-lg tracking-widest max-w-md leading-relaxed">Timeless silhouettes designed for the discerning individual. Meticulously crafted using the finest natural fibers.</p>
        <Link to="/shop" className="mt-16 inline-block w-max bg-theme-primary text-theme-on-primary px-16 py-6 text-[0.75rem] uppercase tracking-[0.3em] font-medium hover:bg-theme-primary-dim transition-all duration-500">The Collection</Link>
      </div>
      <div className="relative overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" alt="Luxury Hero" />
      </div>
    </section>

    <section className="max-w-[1400px] mx-auto px-12 py-32">
      <div className="text-center mb-24">
        <h2 className="font-headline font-light italic text-5xl text-theme-on-surface tracking-tight">Selected Pieces</h2>
        <div className="w-24 h-[1px] bg-theme-outline-var mx-auto mt-8 opacity-40" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.slice(3, 7).map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
    
    <section className="w-full bg-theme-surface-low py-48 px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-theme-outline-var">Maison Identity</span>
        <h2 className="font-headline font-light text-4xl md:text-6xl mt-8 leading-tight italic text-theme-on-surface">"Sustainability practiced through longevity and intention."</h2>
        <Link to="/about" className="mt-12 inline-block border-b border-theme-outline-var pb-2 text-[10px] uppercase tracking-widest text-theme-on-surface hover:text-theme-primary hover:border-theme-primary transition-all">Read Our Etiquette</Link>
      </div>
    </section>
  </div>
)

// --- CASUAL LAYOUT ---
const CasualHome = () => (
  <div className="bg-theme-bg min-h-screen">
    <section className="px-6 py-12 md:px-12 md:py-24">
      <div className="relative rounded-[3rem] overflow-hidden h-[70vh] group">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Casual Hero" />
        <div className="absolute inset-0 bg-theme-primary/10 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="font-headline font-extrabold text-6xl md:text-9xl text-white drop-shadow-2xl">Fresh & <br /> Friendly</h1>
          <p className="mt-8 text-white/90 text-xl font-medium max-w-lg leading-relaxed drop-shadow-md">Your everyday favorites are here. Soft, colorful, and made for actual living.</p>
          <Link to="/shop" className="mt-12 bg-gradient-to-r from-theme-primary to-theme-primary-dim text-white px-16 py-5 rounded-full font-bold text-xl hover:shadow-[0_20px_40px_rgba(0,100,121,0.3)] hover:-translate-y-1 transition-all">Shop All Favs 🛍️</Link>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-theme-on-surface">This Week's Vibes</h2>
          <p className="mt-4 text-theme-on-surface-var font-medium text-lg italic">"Styles that just feel right."</p>
        </div>
        <Link to="/shop" className="text-theme-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">View Shop All <ArrowRight className="w-5 h-5" /></Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.slice(6, 12).map((p, i) => (
          <div key={p.id} className={i % 2 === 0 ? 'mt-0' : 'lg:mt-12'}><ProductCard product={p} /></div>
        ))}
      </div>
    </section>
    
    <section className="px-6 pb-24">
      <div className="bg-theme-surface-low rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center">
         <h3 className="font-headline font-extrabold text-4xl md:text-6xl text-theme-on-surface max-w-2xl leading-tight">Free Shipping on your first order! 🚛</h3>
         <p className="mt-8 text-theme-on-surface-var text-xl font-medium">Use code <span className="text-theme-primary font-bold">STITCH20</span> at checkout.</p>
         <Link to="/shop" className="mt-12 border-2 border-theme-primary text-theme-primary px-12 py-4 rounded-full font-bold hover:bg-theme-primary hover:text-white transition-all">Start Shopping</Link>
      </div>
    </section>
  </div>
)

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      {theme === 'streetwear' && <StreetwearHome />}
      {theme === 'luxury' && <LuxuryHome />}
      {theme === 'casual' && <CasualHome />}
    </>
  )
}
