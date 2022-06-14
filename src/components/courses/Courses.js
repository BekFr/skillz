import React from 'react';
import './Courses.css';
import Card from '../../images/card.png'

export default function Courses() {
  return (
    <section id='courses' className='courses'>
        <div className='container'>
            <div className="courses-content">
            <h1 className='type-course'>Featured Courses</h1>
            <div className='description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            
            <button className="btn">VIEW ALL COURSES</button>
            </div>
            
            <div className="cards">
                <article className="card">
                    <img src={Card} alt="" />
                    <div className="card-content">
                        <h2 className='card-title'>
                            How to Increase Your <br /> Engagement on Instagram 
                        </h2>
                        <h3 className="name">Katie Murphy</h3>
                        <h2 className="price">$ 59.99 USD</h2>
                        <h3 className='additional'>Learn More</h3>
                    </div>
                </article>
                <article className="card">
                    <img src={Card} alt="" />
                    <div className="card-content">
                        <h2 className='card-title'>
                            How to Increase Your <br /> Engagement on Instagram 
                        </h2>
                        <h3 className="name">Katie Murphy</h3>
                        <h2 className="price">$ 59.99 USD</h2>
                        <h3 className='additional'>Learn More</h3>
                    </div>
                </article>
                <article className="card">
                    <img src={Card} alt="" />
                    <div className="card-content">
                        <h2 className='card-title'>
                            How to Increase Your <br /> Engagement on Instagram 
                        </h2>
                        <h3 className="name">Katie Murphy</h3>
                        <h2 className="price">$ 59.99 USD</h2>
                        <h3 className='additional'>Learn More</h3>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}
