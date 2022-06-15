import React from 'react'
import "../App.css"
import Home from './Home'
import Project from './Project'
import Skills from './Skills'

const Body = () => {
  return (
    <div className='BodyContainer'>
      <Home/>
      <Skills/>
      <Project/>
    </div>
  )
}

export default Body
