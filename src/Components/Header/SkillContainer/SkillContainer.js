import React from 'react'
import { Element } from 'react-scroll'
import profile_photo from "../profile_photo.png"
import { LinearProgress } from '@material-ui/core'
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <div>
      <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
            <img src={profile_photo} alt=''/>
            <div className='skillContainer__profileContent'>
              <h1>About Me</h1>
              <p>I am a Motivated student currently pursuing bachelor's degree in Electronics and communication
engineering at Sri krishna college of engineering and technology. I am an enthusiastic, self
motivated and hard working person with building up my leadership quality, a well organized person
and also looking for an opportunity.</p>
            </div>
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
        <div className='skillContainer__skillSet'>
            <h5>C Programming</h5>
            <div className='skillContainer__slider skillContainer__slider1'>
            <LinearProgress variant="determinate" value={75}/>
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>C++</h5>
            <div className='skillContainer__slider skillContainer__slider2'>
            <LinearProgress variant="determinate" value={80}/>
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>Java</h5>
            <div className='skillContainer__slider skillContainer__slider3'>
            <LinearProgress variant="determinate" value={85}/>
            </div>
        </div>
        <div className='skillContainer__skillSet'>
            <h5>React js</h5>
            <div className='skillContainer__slider skillContainer__slider4'>
            <LinearProgress variant="determinate" value={80}/>
            </div>
        </div>
        </div>
      </Element>
    </div>
  )
}

export default SkillContainer
