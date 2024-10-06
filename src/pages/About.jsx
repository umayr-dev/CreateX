import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <main>
      <div className="container">
        <div className="about-banner">
          <div className="about-banner__content">
            <h2>ABOUT US</h2>
            <h1>Createx Online School</h1>
            <h3>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</h3>
            <p>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
            <div className="links">

            <Link to='/events' className='about-btn'>Explore events</Link>
            <Link to='/courses' className='about-btn2'>Browse courses</Link>
            </div>
          </div>
          <img src="/images/illustrationbg.png" alt="" />
        </div>
      </div>
    </main>
  )
}

export default About