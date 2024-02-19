import React from 'react'
import './Navbar.css'
import navlogo from '../../assests/nav-logo.svg'
import navProfile from '../../assests/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src= {navlogo} alt="" className="nav-logo" />
        <h1>TOP MODELS</h1>
        <img src= {navProfile} alt="" className='nav-profile' />
      
    </div>
  )
}

export default Navbar
