import React from 'react'
import linkin from './../../assets/linkedin.png'
import github from './../../assets/github2.png'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/AunchisaS" className='btn-icon' ><img src= {github} alt="" /> </a>
        <a href="https://th.linkedin.com/" className='btn-icon' ><img src= {linkin} alt="" /> </a>
        <a href="#contact" className='btn-contact' >GET IN TOUCH</a>
    </div>
 
    
  )
}

export default HeaderSocials