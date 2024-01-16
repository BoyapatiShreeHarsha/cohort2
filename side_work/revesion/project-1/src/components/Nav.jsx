import React from 'react'
import '../styles/Nav.css'
import logo from '../assets/brand_logo.png'
export default function Nav() {
  return (
    <>
    <div className="navbar">
    <div className="logo"><img src={logo} alt="logo"/></div>
    
    <div className="titles">
        <a href="/">Menu</a>
        <a href="/">Location</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
    </div>
    <div className="login"><button>Login</button></div>
    
    </div>
    </>
  )
}
