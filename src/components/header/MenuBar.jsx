import React from 'react'
import Resume from '../../assets/Resume_Aunchisa_310123.pdf'

import '../nav/Nav.jsx'

const MenuBar = () => {
  return (
    <nav className="menubar">
        <a href="#" className='btn' > Home </a>
        <a href="#about" className='btn'> About me </a>
        <a href="#experience" className='btn'> Experience </a>
        {/* <a href="#contact" className='btn'> Contact </a> */}
        <a href={Resume} download className='btn-resume'> Resume </a>
    </nav>
  )
}

export default MenuBar