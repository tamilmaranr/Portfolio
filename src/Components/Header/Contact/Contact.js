import React from 'react'
import "./Contact.css";
import { Element } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { Facebook ,GitHub,Instagram,LinkedIn} from '@mui/icons-material';

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
            <h1>Contact Me</h1>
        <div className='contact__container'>
            <p>Email : <span>rupmaran@gmail.com</span></p>
        <div className='contact__icons'>
            <a href='www.google.com'>
            <IconButton>
                <Facebook/>
            </IconButton>
            </a>
            <a href='https://www.linkedin.com/in/tamilmaran-r-2b529b226/'>
            <IconButton>
                <LinkedIn/>
            </IconButton>
            </a>
            <a href='https://www.instagram.com/ma_r_an__?igsh=MW9uOXc5ZW5ycnVnbw=='>
            <IconButton>
                <Instagram/>
            </IconButton>
            </a>
            <a href='https://github.com/tamilmaranr'>
            <IconButton>
                <GitHub/>
            </IconButton>
            </a>

        </div>
        </div>
            <div className='contact__border'>

            </div>
    </Element>
  )
}

export default Contact
