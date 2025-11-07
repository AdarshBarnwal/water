import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img className='logo-img' src="https://waterjetpurifier.com/logo512.png" alt="" />
        </div>
        <div className='menu'>
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Contact</h4>
            <h4>Products</h4>
            <h4>Catlouge</h4>
            <h4>Gallery</h4>
        </div>
    </div>
  )
}

export default Navbar