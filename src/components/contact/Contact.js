import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div className='container contact-container'>
        <h1 className='contact-title'>You have the power to define your future.</h1>
        <form action="#">
            <input placeholder=' EMAIL ADRESS' className='email' type="email" />
            <button className='btn submit'>SUBMIT</button>
        </form>
    </div>
  )
}
