import React from 'react';
import PassionImg from '../../images/passion.png';
import './Passion.css'

export default function Passion() {
  return (
    <div className='passion'>
        <div className='container header-container'>
                <div className="left">
                    <img className='phone' src={PassionImg} alt="passion" />
                </div>
                <div className="right">
                    <h1 className='passion-label'>A Passion for Teaching</h1>
                    <h2 className='passion-text'>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding</h2>
                    <button className='btn learn_btn'>LEARN MORE</button>
                </div>
        </div>
    </div>
  )
};