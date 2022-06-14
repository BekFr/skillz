import React from 'react'
import Nav from '../nav/Nav';
import Phone from '../../images/phone.png';
import './Header.css';

export default function Header() {
  return (
    <header id='header'> 
        <div className="top">
            <h3 className='top-txt'>One week only—50% off all courses with code</h3>
        </div> 
        <Nav />
        <div className='container header-container'>
                <div className="right">
                    <h3 className='course-label'>FEATURED COURSE <span></span></h3>
                    <h1 className='label-title'>Run your own online learning platform</h1>
                    <h2 className='text'>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding</h2>
                    <h3 className='name'>Kathryn Murphy</h3>
                    <button className='btn learn_btn'>LEARN MORE</button>
                </div>
                <div className="left">
                    <img className='phone' src={Phone} alt="phone" />
                </div>
        </div>
    </header>
  )
}
