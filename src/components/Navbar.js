import React, { useState } from 'react';
import Logo from '../Assets/logo-burger.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt='logo' className='logo-img' width={25} height={25} />
        <span className="logo-text">Burger</span>
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#recipe">Recipe</a></li>
        <li><a href="#popular">Popular</a></li>
        <li><a href="#delivery">Delivery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;