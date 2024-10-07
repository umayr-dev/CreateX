import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const [headerClassname, setHeaderClassName] = useState('')
  useEffect(() => {
    if(location.pathname !== '/'){
      setHeaderClassName('header-white')
    }else{
      setHeaderClassName('')
    }
  }, [location])

  return (
    <header className={headerClassname}>
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