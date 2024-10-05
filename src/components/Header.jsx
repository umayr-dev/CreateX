import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-navbar">
            <Link to='/'>
            <img src="/images/logo.png" alt="" />
            </Link>
            <Link to='/about'>About Us</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/events'>Events</Link>
            <Link to='/blogs'>Blog</Link>
            <Link to='/contacts'>Contacts</Link>
          </div>
          <div className="header-menu">
            <button className="header-btn">Get consultation</button>
            <div className="registration">
            <img src="/images/Profile.png" alt="" />
              <Link to='/login'>Log in</Link>
              <Link to='/register'>/ Register</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header