import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
        <Element className='experienceContainer' id='experience'>
            <h1>Experience</h1>
    <div className='experienceContainer__info'>
        <a href='https://drive.google.com/file/d/1h7A79TfvKo0yB5FJ3VT91PZbjAKL7aAa/view?usp=sharing'>

            <Experience  title="Emiglitz" desc="Internship on Iot"/>
        </a>
        <a href='www.google.com'>

            <Experience  title="Krishtech" desc="Intership on Machine Learning"/>
        </a>
        <a href='https://drive.google.com/file/d/1gzS5gcYZo2PL-7TuoDTL_JkfRPMXCfqr/view?usp=sharing'>

            <Experience  title="EBDC22" desc="E-Bike design challenge 2022"/>
        </a>
        <a href='https://drive.google.com/drive/folders/1pHEBWIJGY2E18SrrFz1l_P3GpE7hDpC4?usp=sharing'>

            <Experience  title="IIT Madras Workshop" desc="PCB Design and UI_UX with Figma"/>
        </a>
      
    </div>
        </Element>
  )
}

export default ExperienceContainer
