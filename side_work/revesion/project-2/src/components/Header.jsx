import React from 'react'
import '../style/Header.css'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <ul className="titles">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact Us</a></li>
        </ul>
    </div>
  )
}
