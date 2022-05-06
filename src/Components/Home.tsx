import React from 'react'

const Home = () => {
    return (
        <>
            <div id="home">
                <h3>Hey! I am</h3>
                <h1 className='name-tag'>Paresh Mestry</h1>
                <div className="wrapper">
                    <h3 className='static-text'>I'm a</h3>
                    <ul className="dynamic-txts">
                        <li><span>Frontend Developer</span></li>
                        <li><span>Comming Soon..</span></li>
                        <li><span>Comming Soon..</span></li>
                        <li><span>Comming Soon..</span></li>
                    </ul>
                </div>
                <h2>Find me on</h2>
                <div className='flex-container'>
                    <i className="fa fa-instagram icon" style={{fontSize:"36px"}}></i>
                    <i className="fa fa-facebook-square icon" style={{fontSize:"36px"}}></i>
                    <i className="fa fa-whatsapp icon" style={{fontSize:"36px"}}></i>
                    <i className="fa fa-facebook-f icon" style={{fontSize:"36px"}}></i>
                </div>
            </div>
        </>
    )
}

export default Home
