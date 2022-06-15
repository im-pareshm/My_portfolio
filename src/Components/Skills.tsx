import {DiJavascript, DiCss3, DiJavascript1, DiPhp} from 'react-icons/di'
import {RiReactjsFill} from 'react-icons/ri'
import {AiFillHtml5} from 'react-icons/ai'
import {SiPhp} from 'react-icons/si'
const Skills = () => {
  return (
    //@ts-ignore
    <div className='section' id="skills">
      <h2 className='Title'>Skills </h2>
      <div className="skills-container" >
        <span className="skills-flex-child"><AiFillHtml5/></span>
        <span className="skills-flex-child"><DiCss3/></span>
        <span className="skills-flex-child"><DiJavascript1/></span>
        <span className="skills-flex-child"><RiReactjsFill/></span>
        <span className="skills-flex-child"><SiPhp/></span>
      </div>
      
    </div>
  )
}

export default Skills
