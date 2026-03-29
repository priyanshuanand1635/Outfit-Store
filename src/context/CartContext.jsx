import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('stitch-cart') || '[]'))
  const [promoDiscount, setPromoDiscount] = useState(0)
  const [promoCode, setPromoCode] = useState('')

  useEffect(() => {
    localStorage.setItem('stitch-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, size, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === size)
      if (existing) return prev.map(i => i.id === product.id && i.size === size ? { ...i, qty: i.qty + qty } : i)
      return [...prev, { ...product, size, qty }]
    })
  }

  const removeFromCart = (id, size) => setCart(prev => prev.filter(i => !(i.id === id && i.size === size)))

  const updateQty = (id, size, qty) => {
    if (qty < 1) return;
    setCart(prev => prev.map(i => i.id === id && i.size === size ? { ...i, qty } : i))
  }

  const applyPromo = (code) => {
    if (code.toUpperCase() === 'STITCH20') {
      setPromoCode('STITCH20')
      setPromoDiscount(0.2)
      return true
    }
    return false
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const discount = subtotal * promoDiscount
  const total = subtotal - discount

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, updateQty, applyPromo, promoCode,
      cartCount, subtotal, discount, total 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
