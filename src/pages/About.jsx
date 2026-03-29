import { useTheme } from '../context/ThemeContext'
import { ArrowRight, Box, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutContent = ({ theme }) => (
  <div className="bg-theme-bg min-h-screen pt-32 pb-48 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <header className="mb-32 text-center">
        {theme === 'streetwear' ? (
          <h1 className="text-7xl md:text-[10rem] font-headline font-black italic uppercase text-white tracking-tighter leading-none text-left">
            OUR <span className="text-theme-primary">MANIFESTO</span>
          </h1>
        ) : theme === 'luxury' ? (
          <h1 className="font-headline font-light text-5xl md:text-8xl text-theme-on-surface tracking-tight italic">
            The Story
          </h1>
        ) : (
          <h1 className="font-headline font-extrabold text-5xl md:text-8xl text-theme-on-surface">
            About Us 🦄
          </h1>
        )}
      </header>

      {/* CONTENT SECTIONS */}
      <div className="flex flex-col gap-32">
        {/* SECTION 1: THE VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`aspect-square overflow-hidden bg-theme-surface-low ${theme === 'casual' ? 'rounded-[3rem]' : ''}`}>
             <img 
               src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop" 
               alt="Vision" 
               className={`w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105`}
             />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-theme-primary mb-6">Section 01 / The Vision</span>
            <h2 className={`
              ${theme === 'streetwear' ? 'text-4xl md:text-6xl font-headline font-black italic uppercase' : theme === 'luxury' ? 'text-3xl md:text-5xl font-headline font-light italic' : 'text-3xl md:text-5xl font-headline font-extrabold'}
              text-theme-on-surface mb-8
            `}>
              Redefining the <br /> Urban Aesthetic
            </h2>
            <p className="text-theme-on-surface-var text-lg leading-relaxed max-w-lg">
              Vanguard was born in the neon-lit alleys of the future. We believe that what you wear is your armor, your signal, and your statement to the world. Our mission is to merge industrial-grade craft with high-performance design.
            </p>
          </div>
        </div>

        {/* SECTION 2: CRAFT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-end text-right">
            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-theme-primary mb-6">Section 02 / The Craft</span>
            <h2 className={`
              ${theme === 'streetwear' ? 'text-4xl md:text-6xl font-headline font-black italic uppercase' : theme === 'luxury' ? 'text-3xl md:text-5xl font-headline font-light italic' : 'text-3xl md:text-5xl font-headline font-extrabold'}
              text-theme-on-surface mb-8
            `}>
              Precision in <br /> Every Stitched Line
            </h2>
            <p className="text-theme-on-surface-var text-lg leading-relaxed max-w-lg">
              Every piece in our collection is a testament to technical excellence. From bonded seams to weather-resistant textiles, we source our materials from the world's most innovative mills.
            </p>
          </div>
          <div className={`order-1 lg:order-2 aspect-square overflow-hidden bg-theme-surface-low ${theme === 'casual' ? 'rounded-[3rem]' : ''}`}>
             <img 
               src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop" 
               alt="Craft" 
               className={`w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105`}
             />
          </div>
        </div>

        {/* VALUES GRID */}
        <div className="py-24 border-y border-theme-outline-var/10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { Icon: Zap, label: 'Speed & Accuracy', desc: 'Rapid prototyping combined with pixel-accurate execution.' },
                { Icon: Box, label: 'Sustainable Ethics', desc: 'Ethically sourced artifacts designed for a lifetime of use.' },
                { Icon: Shield, label: 'Verified Origin', desc: 'Each piece is digitally verified and physically certified.' }
              ].map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                   <div className="w-16 h-16 rounded-full bg-theme-primary/10 flex items-center justify-center text-theme-primary mb-8 animate-pulse">
                      <v.Icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-headline font-black uppercase mb-4 text-theme-on-surface">{v.label}</h3>
                   <p className="text-[10px] uppercase tracking-widest text-theme-on-surface-var max-w-[200px]">{v.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-48 text-center bg-theme-surface-low py-32 px-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-theme-primary to-transparent" />
         <h2 className={`
           ${theme === 'streetwear' ? 'text-5xl md:text-7xl font-headline font-black italic uppercase leading-tight' : theme === 'luxury' ? 'text-4xl md:text-5xl font-headline font-light italic leading-tight' : 'text-4xl md:text-6xl font-headline font-extrabold leading-tight'}
           text-theme-on-surface mb-12
         `}>
           Ready to join the <br /> Vanguard Collective?
         </h2>
         <Link 
           to="/shop" 
           className={`
             px-16 py-6 text-2xl transition-all inline-flex items-center gap-4
             ${theme === 'streetwear' ? 'bg-theme-primary text-black font-black uppercase' : theme === 'luxury' ? 'bg-theme-primary text-theme-on-primary uppercase tracking-[0.2rem]' : 'bg-theme-primary text-white rounded-full font-bold shadow-lg'}
           `}
         >
           Go to Shop <ArrowRight className="w-6 h-6" />
         </Link>
      </div>
    </div>
  </div>
)

export default function About() {
  const { theme } = useTheme()

  return (
    <>
      {theme === 'streetwear' && <AboutContent theme="streetwear" />}
      {theme === 'luxury' && <AboutContent theme="luxury" />}
      {theme === 'casual' && <AboutContent theme="casual" />}
    </>
  )
}
