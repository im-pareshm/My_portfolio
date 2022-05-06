import React from 'react'
import "../App.css"

const Footer = () => {
    let a = new Date();
    const currentYear = a.getFullYear();
  return (
    <footer style={{color : "white", padding : "20px", fontSize : "30px", letterSpacing : "1.5px"}}>
      <h5 >&#169; copyright {currentYear}</h5>
      <h5>All rights reserved by Paresh Mestry</h5>
    </footer>
  )
}

export default Footer
