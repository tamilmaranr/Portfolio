import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__Container'>
            <h1>Tamilmaran R</h1>
          <div className='topContent__quotes'>
            <h2 className='quotes'>I am a student</h2>
            <h2 className='quotes'>The future belongs to those belives in themself</h2>
          </div>
            <a href="https://drive.google.com/file/d/1g8Szwnvz1GH9Pz7ZReakzw8X7P7I3CDj/view?usp=sharing">
                <button className='topContent__resumeButton'>Resume</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent__workButton'>My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
