import React from 'react';
import './Teacher.css';
import TeacherImg from '../../images/teacher.png'

export default function Teacher() {
  return (
    <div className='teacher'>
        <div className="teacher-img">
            <img src={TeacherImg} alt="" />
        </div>
        <div className="teacher-content">
            <div className="container">
                <h1 className='recommendation'>Get personalized learning recommendations</h1>
                <h3 className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</h3>
                <button className='btn'>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}
