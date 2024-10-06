import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="row">
            <Link to='/'><img src="/images/logo (2).png" alt="" /></Link>
            <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
            <img src="/images/socials.png" alt="" />
          </div>
          <div className="row">
            <h1>SITE MAP</h1>
            <Link className='link' to='/about'>About Us</Link>
            <Link className='link' to='/courses'>Courses</Link>
            <Link className='link' to='/events'>Events</Link>
            <Link className='link' to='/blogs'>Blog</Link>
            <Link className='link' to='/contacts'>Contacts</Link>
          </div>
          <div className="row">
            <h1>COURSES</h1>
            <p>Marketing</p>
            <p>Management</p>
            <p>HR & Recruting</p>
            <p>Design</p>
            <p>Development</p>
          </div>
          <div className="row">
            <h1>Contact Us</h1>
            <p><img src="/images/iPhone.png" alt="" />(405) 555-0128</p>
            <p><img src="/images/Mail.png" alt="" />hello@createx.com</p>
          </div>
          <div className="row">
            <h1>SIGN UP TO OUR NEWSLETTER</h1>
            <div className="input">
              <input type="text" placeholder='Email Address' />
              <img src="/images/Right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="column">
            <p> © All rights reserved. Made with
            by Createx Studio </p>
            <p>GO TO TOP</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer