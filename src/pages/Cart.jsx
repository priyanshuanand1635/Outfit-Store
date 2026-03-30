import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

const CartLayout = ({ theme, cart, removeFromCart, updateQty, applyPromo, promoCode, subtotal, discount, total, promoInput, setPromoInput }) => {
  const handleApplyPromo = () => applyPromo(promoInput)

  return (
    <div className="bg-theme-bg min-h-screen pt-32 pb-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          {theme === 'streetwear' ? (
            <h1 className="text-7xl md:text-9xl font-headline font-black italic uppercase text-white tracking-tighter leading-none">YOUR <span className="text-theme-primary">HAUL</span></h1>
          ) : theme === 'luxury' ? (
            <h1 className="font-headline font-light text-5xl md:text-6xl text-theme-on-surface tracking-tight italic text-center">Your Selection</h1>
          ) : (
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-theme-on-surface text-center">Your Bag 🛍️</h1>
          )}
        </header>

        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
            {cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="flex flex-col sm:flex-row gap-8 pb-12 border-b border-theme-outline-var/10 group">
                <div className={`w-full sm:w-56 aspect-[3/4] overflow-hidden bg-theme-surface-low ${theme === 'casual' ? 'rounded-2xl' : ''}`}>
                  <img src={item.image} className={`w-full h-full object-cover ${theme === 'streetwear' ? 'grayscale group-hover:grayscale-0' : ''}`} alt={item.name} loading="lazy" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-2xl font-headline ${theme === 'luxury' ? 'font-light italic' : 'font-black uppercase'}`}>{item.name}</h3>
                      <p className="text-xs uppercase tracking-widest text-theme-on-surface-var mt-2">Size: {item.size}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="p-2 text-theme-outline-var hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className={`flex items-center ${theme === 'streetwear' ? 'border border-zinc-800 bg-zinc-950' : theme === 'luxury' ? 'border border-theme-outline-var/20' : 'bg-theme-surface-mid rounded-full'}`}>
                      <button onClick={() => updateQty(item.id, item.size, item.qty - 1)} className="p-3 hover:text-theme-primary transition-colors"><Minus className="w-4 h-4" /></button>
                      <span className="px-4 font-black text-lg">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.size, item.qty + 1)} className="p-3 hover:text-theme-primary transition-colors"><Plus className="w-4 h-4" /></button>
                    </div>
                    <span className="text-3xl font-black text-theme-on-surface">${item.price * item.qty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="col-span-12 lg:col-span-4 self-start sticky top-32">
            <div className={`p-8 ${theme === 'streetwear' ? 'bg-zinc-900 border border-white/5 shadow-2xl' : theme === 'luxury' ? 'border border-theme-outline-var/20 bg-theme-surface-low' : 'bg-white rounded-[2rem] shadow-xl'}`}>
              <h2 className={`text-xl font-headline mb-8 ${theme === 'luxury' ? 'font-light uppercase tracking-widest' : 'font-black uppercase'}`}>Order Summary</h2>
              
              <div className="mb-8 flex border-b border-theme-outline-var/20 pb-2">
                <input 
                  type="text" 
                  value={promoInput} 
                  onChange={(e) => setPromoInput(e.target.value)} 
                  placeholder="PROMO CODE" 
                  className={`flex-1 bg-transparent text-xs font-black tracking-widest uppercase focus:outline-none placeholder:text-zinc-600`} 
                />
                <button onClick={handleApplyPromo} className="ml-4 text-theme-primary hover:scale-125 transition-transform"><ArrowRight className="w-5 h-5" /></button>
              </div>

              <div className="flex flex-col gap-4 text-sm font-medium border-b border-theme-outline-var/10 pb-6 mb-6">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
                {discount > 0 && <div className="flex justify-between text-theme-primary"><span>Discount (STITCH20)</span><span>-${discount}</span></div>}
                <div className="flex justify-between"><span>Shipping</span><span className="text-theme-primary uppercase text-[10px] font-black">Free</span></div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-xl font-black uppercase">Total</span>
                <span className={`text-4xl ${theme === 'streetwear' ? 'text-theme-primary' : 'text-theme-on-surface'} font-black tracking-tighter`}>${total}</span>
              </div>

              <button className={`w-full py-6 text-xl transition-all duration-300 ${theme === 'streetwear' ? 'bg-theme-primary text-black font-black uppercase hover:bg-white' : theme === 'luxury' ? 'bg-theme-primary text-theme-on-primary font-medium uppercase tracking-widest hover:bg-theme-primary-dim shadow-lg' : 'bg-gradient-to-r from-theme-primary to-theme-primary-dim text-white font-bold rounded-full hover:shadow-2xl'}`}>
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default function Cart() {
  const { theme } = useTheme()
  const { cart, removeFromCart, updateQty, applyPromo, promoCode, subtotal, discount, total } = useCart()
  const [promoInput, setPromoInput] = useState('')

  if (cart.length === 0) return (
    <div className="bg-theme-bg min-h-screen pt-48 text-center px-6">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <ShoppingBag className="w-24 h-24 text-theme-surface-mid mb-12 opacity-20" />
        <h1 className="text-5xl font-headline font-black uppercase mb-8">EMPTY {theme === 'streetwear' ? 'HAUL' : 'BAG'}</h1>
        <p className="text-theme-on-surface-var mb-12 text-xl font-medium">Your next favorite fit is just a few clicks away.</p>
        <Link 
          to="/shop" 
          className={`px-16 py-6 text-xl transition-all ${theme === 'streetwear' ? 'bg-theme-primary text-black font-black uppercase' : theme === 'luxury' ? 'bg-theme-primary text-white uppercase tracking-widest' : 'bg-theme-primary text-white rounded-full font-bold shadow-lg'}`}
        >
          Shop Collection
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {theme === 'streetwear' && <CartLayout theme="streetwear" cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} applyPromo={applyPromo} promoCode={promoCode} subtotal={subtotal} discount={discount} total={total} promoInput={promoInput} setPromoInput={setPromoInput} />}
      {theme === 'luxury' && <CartLayout theme="luxury" cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} applyPromo={applyPromo} promoCode={promoCode} subtotal={subtotal} discount={discount} total={total} promoInput={promoInput} setPromoInput={setPromoInput} />}
      {theme === 'casual' && <CartLayout theme="casual" cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} applyPromo={applyPromo} promoCode={promoCode} subtotal={subtotal} discount={discount} total={total} promoInput={promoInput} setPromoInput={setPromoInput} />}
    </>
  )
}
