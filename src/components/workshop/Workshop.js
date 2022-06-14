import React from 'react';
import './Workshop.css';
import Card from '../../images/card.png'

export default function Workshop() {
  return (
    <section id='workshop' className='workshop'>
        <div className='container'>
            <div className="workshop-content">
                <h1 className='type-course-workshop'>Upcoming Free Workshops</h1>
                <div className='workshop-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>
                
                <button className="btn">View All Workshops</button>
            </div>
            
            <div className="cards">
                <article className="card">
                    <div className="card-content">
                        <h3 className='card-title'>Photography Basics</h3>
                        <h3 className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</h3>
                        <h3 className='card-additional'>Learn More</h3>
                    </div>
                </article>
                <article className="card">
                    <div className="card-content">
                        <h3 className='card-title'>Photography Basics</h3>
                        <h3 className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</h3>
                        <h3 className='card-additional'>Learn More</h3>
                    </div>
                </article>
                <article className="card">
                    <div className="card-content">
                        <h3 className='card-title'>Photography Basics</h3>
                        <h3 className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</h3>
                        <h3 className='card-additional'>Learn More</h3>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

