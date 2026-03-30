import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

// --- STREETWEAR LAYOUT ---
const StreetwearHome = () => (
  <div className="bg-theme-bg min-h-screen">
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1200&auto=format&fit=crop&q=75" 
          className="w-full h-full object-cover opacity-50 grayscale" 
          alt="Hero"
          loading="lazy"
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
            src={`https://images.unsplash.com/photo-${i === 0 ? '1551028719-01c1eb5fe9b0' : i === 1 ? '1542291026-7eec264c27ff' : '1556821840-3a63f15732ce'}?w=800&auto=format&fit=crop&q=80`} 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale"
            alt={cat}
            loading="lazy"
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
  <div className="min-h-screen" style={{ background: '#faf9f6', color: '#2c2820' }}>

    {/* ── HERO: Full-bleed split — text left, editorial photo right ── */}
    <section className="h-[92vh] grid grid-cols-1 lg:grid-cols-2 mt-20">
      <div className="flex flex-col justify-center px-12 lg:px-24" style={{ background: '#faf9f6' }}>
        {/* Pretitle */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12" style={{ background: '#a0845a' }} />
          <span className="text-[9px] uppercase tracking-[0.45em]" style={{ color: '#a0845a' }}>Maison Vanguard — SS 2026</span>
        </div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 0.85, letterSpacing: '-0.03em', color: '#1a1612', fontWeight: 300 }}>
          The<br /><em>Quiet</em><br />Luxury
        </h1>
        <p className="mt-12 text-lg leading-relaxed max-w-md" style={{ color: '#7a6b58', fontWeight: 300, letterSpacing: '0.01em' }}>
          Timeless silhouettes for the discerning individual. Crafted from the finest natural fibres sourced across three continents.
        </p>
        <div className="flex items-center gap-6 mt-16">
          <Link to="/shop"
            className="text-[10px] uppercase tracking-[0.35em] px-12 py-5 font-medium transition-all duration-500"
            style={{ background: '#2c2820', color: '#faf9f6' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#a0845a' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2c2820' }}
          >
            The Collection
          </Link>
          <Link to="/about" className="text-[9px] uppercase tracking-[0.35em] pb-1 transition-all" style={{ color: '#a0845a', borderBottom: '1px solid #a0845a' }}>
            Our Story
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative overflow-hidden group h-full">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&auto=format&fit=crop&q=80"
          alt="Luxury Hero"
          className="w-full h-full object-cover"
          style={{ transition: 'transform 2s cubic-bezier(0.25,0.46,0.45,0.94)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          loading="lazy"
        />
        {/* Gold overlay stripe — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, transparent, #a0845a, transparent)' }} />
      </div>
    </section>

    {/* ── DIVIDER ── */}
    <div className="flex items-center gap-8 px-12 py-16" style={{ borderTop: '1px solid rgba(160,132,90,0.2)', borderBottom: '1px solid rgba(160,132,90,0.2)' }}>
      {['Outerwear', 'Ready-to-Wear', 'Accessories', 'New Season'].map((cat, i) => (
        <div key={cat} className="flex items-center gap-8">
          <Link to="/shop" className="text-[9px] uppercase tracking-[0.5em] transition-colors" style={{ color: '#a0845a' }}
            onMouseEnter={e => e.currentTarget.style.color = '#2c2820'}
            onMouseLeave={e => e.currentTarget.style.color = '#a0845a'}
          >{cat}</Link>
          {i < 3 && <span className="text-[8px]" style={{ color: 'rgba(160,132,90,0.4)' }}>◆</span>}
        </div>
      ))}
    </div>

    {/* ── LOOKBOOK ROW: 3-column editorial images ── */}
    <section className="grid grid-cols-3 h-[75vh]">
      {[
        { src: 'photo-1490481651871-ab68de25d43d', label: 'Outerwear' },
        { src: 'photo-1515886657613-9f3515b0c78f', label: 'Evening' },
        { src: 'photo-1539185441755-769473a23570', label: 'Tailoring' },
      ].map((item, i) => (
        <Link to="/shop" key={item.label}
          className="relative overflow-hidden group"
          style={{ borderRight: i < 2 ? '1px solid rgba(160,132,90,0.2)' : 'none' }}
        >
          <img
            src={`https://images.unsplash.com/${item.src}?w=700&auto=format&fit=crop&q=80`}
            alt={item.label}
            className="w-full h-full object-cover"
            style={{ transition: 'transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)', transform: 'scale(1)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            loading="lazy"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.6) 0%, transparent 60%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-[9px] uppercase tracking-[0.5em] mb-2" style={{ color: '#c8b89a' }}>{item.label}</p>
            <p className="text-white text-sm font-light" style={{ fontFamily: 'Georgia, serif' }}>Explore →</p>
          </div>
        </Link>
      ))}
    </section>

    {/* ── SELECTED PIECES ── */}
    <section style={{ background: '#f5f2ec', padding: '8rem 3rem' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-20">
          <div>
            <span className="text-[9px] uppercase tracking-[0.45em] block mb-4" style={{ color: '#a0845a' }}>The Maison</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, color: '#1a1612', fontStyle: 'italic' }}>
              Selected Pieces
            </h2>
          </div>
          <Link to="/shop" className="text-[9px] uppercase tracking-[0.4em] pb-1 transition-all"
            style={{ color: '#a0845a', borderBottom: '1px solid rgba(160,132,90,0.5)' }}
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(3, 7).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>

    {/* ── EDITORIAL STRIP: full-width image with quote overlay ── */}
    <section className="relative h-[80vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=75"
        alt="Editorial"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,22,18,0.85) 0%, rgba(26,22,18,0.2) 60%, transparent 100%)' }} />
      <div className="absolute inset-0 flex items-center px-16 lg:px-32">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8" style={{ background: '#a0845a' }} />
            <span className="text-[9px] uppercase tracking-[0.5em]" style={{ color: '#a0845a' }}>Maison Identity</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#faf9f6', lineHeight: 1.2, fontStyle: 'italic' }}>
            "Clothing as an act of quiet devotion."
          </h2>
          <p className="mt-8 text-base font-light leading-relaxed" style={{ color: 'rgba(250,249,246,0.65)', maxWidth: '36ch' }}>
            Every garment begins as a single thought — to create something that outlasts the moment.
          </p>
          <Link to="/about"
            className="inline-block mt-12 text-[9px] uppercase tracking-[0.45em] pb-1 transition-all"
            style={{ color: '#c8b89a', borderBottom: '1px solid rgba(200,184,154,0.5)' }}
          >
            Read Our Manifesto
          </Link>
        </div>
      </div>
    </section>

    {/* ── DUAL IMAGE SECTION: craftsmanship ── */}
    <section className="grid grid-cols-1 lg:grid-cols-2" style={{ background: '#faf9f6' }}>
      {/* Left image */}
      <div className="relative h-[70vh] overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&auto=format&fit=crop&q=80"
          alt="Craftsmanship"
          className="w-full h-full object-cover"
          style={{ transition: 'transform 1.6s ease', transform: 'scale(1)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          loading="lazy"
        />
      </div>
      {/* Right text */}
      <div className="flex flex-col justify-center px-16 lg:px-24 py-24" style={{ background: '#1a1612' }}>
        <span className="text-[9px] uppercase tracking-[0.5em] block mb-8" style={{ color: '#a0845a' }}>The Craft</span>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)', fontWeight: 300, color: '#faf9f6', lineHeight: 1.15, fontStyle: 'italic' }}>
          Precision in<br />every stitch.
        </h2>
        <p className="mt-8 text-base leading-relaxed" style={{ color: 'rgba(250,249,246,0.55)', fontWeight: 300, maxWidth: '38ch' }}>
          Our atelier spans from Antwerp to Kyoto — each technique drawn from century-old traditions, applied to the contemporary silhouette.
        </p>
        <Link to="/about"
          className="mt-12 inline-block text-[9px] uppercase tracking-[0.45em] pb-1 w-max transition-all"
          style={{ color: '#c8b89a', borderBottom: '1px solid rgba(200,184,154,0.4)' }}
        >
          Our Process
        </Link>
      </div>
    </section>

    {/* ── MANIFESTO QUOTE ── */}
    <section className="py-32 px-12 text-center" style={{ borderTop: '1px solid rgba(160,132,90,0.2)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(160,132,90,0.4))' }} />
          <span className="text-[8px] uppercase tracking-[0.6em]" style={{ color: '#a0845a' }}>Vanguard Luxe</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(160,132,90,0.4))' }} />
        </div>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 300, color: '#1a1612', lineHeight: 1.35, fontStyle: 'italic' }}>
          "Sustainability practiced through longevity and intention."
        </h2>
        <Link to="/about"
          className="mt-12 inline-block text-[9px] uppercase tracking-[0.45em] pb-1 transition-all"
          style={{ color: '#a0845a', borderBottom: '1px solid rgba(160,132,90,0.5)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#2c2820'}
          onMouseLeave={e => e.currentTarget.style.color = '#a0845a'}
        >
          Read Our Etiquette
        </Link>
      </div>
    </section>
  </div>
)

// --- CASUAL LAYOUT ---
const CasualHome = () => (
  <div className="bg-theme-bg min-h-screen">
    <section className="px-6 py-12 md:px-12 md:py-24">
      <div className="relative rounded-[3rem] overflow-hidden h-[70vh] group">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&auto=format&fit=crop&q=75" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Casual Hero" loading="lazy" />
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
