import React from 'react'
import webdev from '../../images/favicon.ico'
import './navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className='navbar-brand'>
      <a href='/'>
          <img src={webdev} className='navbar-favicon' alt="webdev" />
          <span className='navbar-text'>Brandon Tsai</span>
      </a>
    </div>
    <div className='navbar-links'>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar
