import React from 'react'
import Button from '../shared/Button'
import CTA from '../shared/CTA'
import './Header.css'
import HomeImage from '../../assets/HomeImage.svg'
import Resume from '../../assets/resume.pdf'
import Socials from '../shared/Socials'

const Header = () => {
  return (
    <header className="wrapper">
      <Socials/>
      <div className="header__container">
        <h5>Hello, I'm</h5>
        <div className="name">
        <h1>Shambel</h1>
        <h2>Amare</h2>
        </div>
        <h5 className="text-light">Fullstack Developer/ Designer</h5>
        <div className="buttons">
        <CTA className="btn" downloadable link={Resume} text="Download CV"/>
        <CTA className='btn btn-secondary' link='#contact' text="Get In touch"/>
        </div>
        
      </div>
      <div className="img__container">
        <img src={HomeImage} alt="" />
      </div>
    </header>
  )
}

export default Header