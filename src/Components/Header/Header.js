import React from 'react'
import {Link} from 'react-scroll'
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home'; // Importing the HomeIcon component

const Header = () => {
  return (
    <div className="header">
      <div className="header__left ">
        <h1>Portfol<span>io</span></h1>
      </div>
      <div className='header__right'>
        
        <Link to="skills" smooth={true} duration={500}>
            <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
            <h4>Projects</h4>
        </Link>
        <Link to="experience" smooth={true} duration={500}>
            <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
            <h4>Contact</h4>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <div className='homeIcon'>

            <HomeIcon fontSize='large'/>
          </div>
        </Link>
        
        <h4 className='header__rightButton'>Join With Me</h4>
      </div>
    </div>
  )
}

export default Header
