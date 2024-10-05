import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import About from './About'
import Courses from './Courses'
import Events from './Events'
import Blogs from './Blogs'
import Contacts from './Contacts'
import NotFound from './NotFound'
import Login from './Login'
import Register from './Register'

function Main() {
  return (
    <main>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/*' element={<NotFound />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>

            

        </Routes>
    </main>
  )
}

export default Main