import React from 'react'

const Contact = () => {
    return (
        //@ts-ignore
        <div className='section' style={{color: "white", padding: "20px"}} id="contact">
            <h2 className='Title'>Contact </h2>
            <p style={{fontSize: "23px",margin: "50px"}}>Want to get in touch? Contact me on any platform</p>
            <div className='flex-container' style={{margin: "35px"}}>
                <i className="fa fa-instagram icon" style={{ fontSize: "36px" }}></i>
                <i className="fa fa-facebook-square icon" style={{ fontSize: "36px" }}></i>
                <i className="fa fa-whatsapp icon" style={{ fontSize: "36px" }}></i>
                <i className="fa fa-facebook-f icon" style={{ fontSize: "36px" }}></i>
            </div>
        </div>
    )
}

export default Contact
