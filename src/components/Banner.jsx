import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <>
        <main className='banner-main'>
            <div className="container">

            <div className="banner">
                <div className="banner-top">
                    <div className="banner-content">
                        <img src="/images/play-video.png" width={170} height={85} alt="" />
                        <h1>Enjoy studying <br />
                        with Createx <br /> Online Courses</h1>
                        <div className="banner-content__buttons">
                            <Link className='banner-btn' to='/about'>About Us</Link>
                            <Link to='/courses' className='banner-btn-course'>Explore courses</Link>
                        </div>
                    </div>
                    <img src="/images/illustration.png" alt="" />
                </div>
                <div className="banner-bottom">
                    <h1>1200</h1>
                    <p>Students graduated</p>
                    <span></span>
                    <h1>84</h1>
                    <p>Completed courses</p>
                    <span></span>
                    <h1>16</h1>
                    <p>Qualified tutors</p>
                    <span></span>
                    <h1>5</h1>
                    <p>Years of experience</p>
                </div>
            </div>
            </div>
        </main>
    </>
  )
}

export default Banner