import React from 'react'
import "./Experience.css";

const Experience = ({title,desc,style}) => {
  return (
    <div style={{...style}} className='experience'>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Experience
