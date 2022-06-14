import React from 'react';
import Logo from '../../images/logo.png';
import './Nav.css';

import Basket from '../../images/basket.png'

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='container nav-container'>
        <input type="checkbox" id="nav-check"></input>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        
        <div className="navbar">
          <a href="#courses">Courses</a>
          <a href="#free-workshops">Free Workshops</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="basket">
          <img src={Basket} alt="basket" />
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
    </nav> 
  )
}





