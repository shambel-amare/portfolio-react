import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import '../header/Header.css'

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" className="socials"><BsLinkedin/></a>
        <a href="https://github.com.com" target="_blank" className="socials"><BsGithub/></a>
        <a href="https://dribble.com" target="_blank" className="socials"><BsDribbble/></a>
    </div>
  )
}

export default Socials