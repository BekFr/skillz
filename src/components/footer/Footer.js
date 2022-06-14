import React from 'react'
import Contact from '../contact/Contact';
import Logo from '../../images/logo.png';
import Tiktok from '../../images/tiktok.png';
import Instagram from '../../images/instagram.png';
import Youtube from '../../images/youtube.png';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';

import './Footer.css';


export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container container'>

        <Contact />
        <div className="footer-logo">
          <img  src={Logo} alt="" />
        </div>

        <div className="wrapper">
            <div className="links">
              <ul>
                <li>Learning Platform</li>
                <li>Home</li>
                <li>Courses</li>
                <li>Free Workshops</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <ul>
                <li><a href="#"></a>Template</li>
                <li><a href="#"></a>Instructions</li>
                <li><a href="#"></a>Style Guide</li>
                <li><a href="#"></a>Licenses</li>
                <li><a href="#"></a>Changelog</li>
              </ul>
            </div>
            <div className="messengers-section">
              <h1>Follow skillz</h1>
              <div className="messengers">
                <div className="messenger">
                  <img src={Tiktok} alt="" />
                </div>
                <div className="messenger">
                  <img src={Instagram} alt="" />
                </div>
                <div className="messenger">
                  <img src={Youtube} alt="" />
                </div>
                <div className="messenger">
                  <img src={Facebook} alt="" />
                </div>
                <div className="messenger">
                  <img src={Twitter} alt="" />
                </div>
              </div>
            </div>
        </div>
        
      </div>
      <div className='info'>
            <h4>© Skillz Template</h4>
            <h4>Powered by Webflow</h4>
      </div>
    </div>
    
  )
}
