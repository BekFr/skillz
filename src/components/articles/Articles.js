import React from 'react';
import './Articles.css';
import Article from '../../images/articles.png'


export default function Articles() {
  return (
    <section id='artiles' className='articles'>
        <div className='container'>
            <div className="courses-content">
            <h1 className='articles-title'>Recent Articles</h1>
            <div className='articles-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            
            <button className="btn">VIEW ALL COURSES</button>
            </div>
            
            <div className="cards">
                <article className="card">
                    <img src={Article} alt="" />
                    <div className="card-content">
                        <h3 className="article-date">February 8, 2021</h3>
                        <h2 className='article-card-title'>
                            The TikTok Algorithm: How to Get the Best Engagement 
                        </h2>
                        <h3 className="article-name">Dianne Russell</h3>
                    </div>
                </article>
                <article className="card">
                    <img src={Article} alt="" />
                    <div className="card-content">
                        <h3 className="article-date">February 8, 2021</h3>
                        <h2 className='article-card-title'>
                            The TikTok Algorithm: How to Get the Best Engagement 
                        </h2>
                        <h3 className="article-name">Dianne Russell</h3>
                    </div>
                </article>
                <article className="card">
                    <img src={Article} alt="" />
                    <div className="card-content">
                        <h3 className="article-date">February 8, 2021</h3>
                        <h2 className='article-card-title'>
                            The TikTok Algorithm: How to Get the Best Engagement 
                        </h2>
                        <h3 className="article-name">Dianne Russell</h3>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}
