import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div >
    <nav className="navbar"><div className='name'><NavLink to="/"><h2>ShopperPoint</h2></NavLink></div>
      <div className='rightside'><NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/cart"><p id="cart">🛒</p></NavLink>
      </div></nav>
      
    
    </div>
  )
}
