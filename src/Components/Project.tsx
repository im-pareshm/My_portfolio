import React from 'react'
// import {Button} from 'react-bootstrap';

const Project = () => {

  const myProjects = [
    {
      "title" : "Linux Emulator Web App",
      "img" : "https://wallpaperforu.com/wp-content/uploads/2021/05/Wallpaper-Linux-Logo-Minimalism-Foxyriot-Tux-Studio-Sh27-1536x864.jpg",
      "desc" : "Linux Emulator is a web application basic motivation behind Linux emulator is to help people learn about Linux and its concepts.",
      "skills" : "Pyhton, flask, Html, Css, Linux",
      "urls" : [
        {
          "name" : "Github",
          "link" : "www.google.com"
        }
      ]
    },
    {
      "title" : "Customer Feeback Form Using Php MySql",
      "img" : "http://truelogic.org/wordpress/wp-content/uploads/2011/12/php-mysql-3.gif",
      "desc" : "Customer feedback form that will take feedback from customer and store it in a database. For the database we used MySQL also after filling feedback form users can see recent feedback from other users also.",
      "skills" : "Php, MySql, Html, Css",
      "urls" : [
        {
          "name" : "Github",
          "link" : "www.google.com"
        }
      ]
    }
  ]

  return (
    <div className="section" id="project">
      <h2 className='Title'>Projects </h2>
      
      { myProjects.map((obj, i) => (
        <div className="project-card" key={i}>
          <div className="img-container" style={{background: `url("${obj.img}") no-repeat center`, backgroundSize : "100% 100%"}}>
          </div>

          <div className="project-info">
            <h4>{obj.title}</h4>
            <div className="info-c">
              <p>{obj.desc}</p>
            </div>
            <div className="skills">
              <p> <span>Used Skills -</span> {obj.skills}</p>
            </div>
            {obj.urls.map((urlObj, i)=>(
              <div className='btn-container'>
                <button className='project-card-btn btn' > <a href={urlObj.link} style={{textDecoration : "none", color : "white"}}>{urlObj.name}</a> </button>
              </div>
            ))}
          </div>
        </div> 
      ))
      }
    </div>
  )
}

export default Project
