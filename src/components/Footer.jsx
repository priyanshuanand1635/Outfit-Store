import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// Simple custom SVG social icons to avoid lucide-react version mismatches
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const SocialIcons = [InstagramIcon, TwitterIcon, FacebookIcon]

export default function Footer() {
  const { theme } = useTheme()

  if (theme === 'streetwear') {
    return (
      <footer className="relative bg-zinc-950 border-t border-zinc-900 pt-32 pb-48 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          <div>
            <h3 className="font-headline font-black italic tracking-tighter uppercase text-3xl text-white">
              VANGUARD KINETIC
            </h3>
            <p className="mt-6 text-zinc-500 text-xs font-bold tracking-widest uppercase max-w-xs leading-loose">
              Forging the artifacts of the new digital age. Urban tactics, technical craft.
            </p>
            <div className="flex gap-4 mt-8">
              {SocialIcons.map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-theme-primary hover:border-theme-primary transition-all cursor-pointer group">
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-black italic tracking-widest uppercase text-theme-primary text-sm mb-8">
              Navigation
            </h4>
            <div className="flex flex-col gap-4">
              {['Shop All', 'Collections', 'About', 'Archive'].map(link => (
                <Link key={link} to={`/${link.toLowerCase().replace(' ', '')}`} className="text-zinc-500 uppercase text-xs font-bold tracking-tight hover:text-theme-primary transition-colors flex items-center gap-2 group">
                  {link}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-black italic tracking-widest uppercase text-theme-primary text-sm mb-8">
              Legal
            </h4>
            <div className="flex flex-col gap-4">
              {['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'FAQ'].map(link => (
                <Link key={link} to="/" className="text-zinc-500 uppercase text-xs font-bold tracking-tight hover:text-theme-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-black italic tracking-widest uppercase text-theme-primary text-sm mb-8">
              Join the Vanguard
            </h4>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-zinc-900 border-none text-white text-[10px] font-black uppercase tracking-widest px-6 py-5 rounded-none focus:ring-1 focus:ring-theme-primary transition-all outline-none"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-primary hover:scale-125 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="mt-12 text-[9px] uppercase font-black text-zinc-600 tracking-[0.4em]">
              ©2026 VANGUARD KINETIC. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    )
  }

  if (theme === 'luxury') {
    return (
      <footer className="bg-theme-bg pt-32 pb-48 px-12 border-t border-theme-outline-var/20">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Link to="/" className="font-headline font-light text-5xl tracking-[-0.04em] text-theme-primary mb-16">
            VANGUARD
          </Link>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
            <div className="flex flex-col gap-6">
              <h4 className="font-display font-light text-lg text-theme-on-surface uppercase tracking-[0.2em] mb-4">
                The House
              </h4>
              {['Our Story', 'Craftsmanship', 'Locations', 'Commitment'].map(link => (
                <Link key={link} to="/" className="text-[10px] uppercase tracking-[0.3em] text-theme-outline-var hover:text-theme-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-display font-light text-lg text-theme-on-surface uppercase tracking-[0.2em] mb-4">
                Customer Care
              </h4>
              {['Contact Us', 'Bespoke Services', 'Shipping', 'Returns'].map(link => (
                <Link key={link} to="/" className="text-[10px] uppercase tracking-[0.3em] text-theme-outline-var hover:text-theme-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-display font-light text-lg text-theme-on-surface uppercase tracking-[0.2em] mb-4">
                Newsletter
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-theme-outline-var leading-relaxed mb-4">
                SUBSCRIBE TO RECEIVE UPDATES ON NEW COLLECTIONS ONLY.
              </p>
              <form className="border-b border-theme-outline-var/40 flex items-center justify-between py-2 group focus-within:border-theme-primary transition-colors" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-transparent border-none text-[10px] uppercase tracking-widest text-theme-on-surface w-full focus:outline-none placeholder:text-theme-outline-var/30"
                />
                <button type="submit" className="text-theme-outline-var hover:text-theme-primary transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <p className="mt-32 text-[8px] uppercase tracking-[0.5em] text-theme-outline-var">
            © 2026 VANGUARD LUXE. BUILT WITH INTENTION.
          </p>
        </div>
      </footer>
    )
  }

  // CASUAL
  return (
    <footer className="bg-theme-surface-low pt-24 pb-32 px-8 border-t border-theme-outline-var/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h3 className="font-display font-extrabold text-3xl text-theme-primary mb-6">
              The Buoyant Boutique
            </h3>
            <p className="text-theme-on-surface-var text-lg max-w-md leading-relaxed">
              Clothes made for everyday joy. Designed with soft fabrics, vibrant colors, and pure comfort in mind.
            </p>
            <div className="flex gap-4 mt-8">
              {SocialIcons.map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-theme-primary hover:bg-theme-primary hover:text-white transition-all cursor-pointer">
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-theme-on-surface uppercase tracking-wider mb-2">Shop</h4>
              {['All Products', 'Home', 'Active', 'Accessories'].map(link => (
                <Link key={link} to="/" className="text-theme-on-surface-var hover:text-theme-primary transition-colors font-medium">
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-theme-on-surface uppercase tracking-wider mb-2">Help</h4>
              {['Track Order', 'Size Guide', 'Delivery', 'Privacy'].map(link => (
                <Link key={link} to="/" className="text-theme-on-surface-var hover:text-theme-primary transition-colors font-medium">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-theme-outline-var/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-theme-on-surface-var text-sm font-medium">
            © 2026 THE BUOYANT BOUTIQUE. ALL SMILES. 🦄
          </p>
          <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-sm">
            <Mail className="w-4 h-4 text-theme-primary ml-2" />
            <input
              type="email"
              placeholder="Join our happy list"
              className="bg-transparent border-none text-sm font-medium focus:outline-none py-1"
            />
            <button type="button" className="bg-theme-primary text-white p-2 rounded-full hover:scale-105 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
