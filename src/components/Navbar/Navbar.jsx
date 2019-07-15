import React from 'react'
import webdev from '../../images/favicon.ico'
import './navbar.css'

const Navbar = () => (
  <nav className="navbar bg-dark">
    <div className='brand'>
      <a href="/">
        <img src={webdev} className="favicon" alt="webdev" />
        <span className='text'>Brandon Tsai</span>
      </a>
    </div>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/resume">Resume</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar
