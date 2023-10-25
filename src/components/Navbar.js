import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div >
    <nav className="navbar"><div className='name'><NavLink to="/"><h2>ShopperPoint</h2></NavLink></div>
      <div className='rightside'><NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/cart"><p className="cart">🛒</p></NavLink>
          {cart.length>0 &&(<span className='cartSize'>{cart.length}</span>)}
      </div></nav>
      
    
    </div>
  )
}
