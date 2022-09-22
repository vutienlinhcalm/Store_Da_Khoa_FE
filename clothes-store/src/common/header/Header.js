import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>Logo</div>
      <div className='category'>
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/blogs" className="link">
          Blog
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </div>
    </div>
  )
}

export default Header