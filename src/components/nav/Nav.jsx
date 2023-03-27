import React from 'react'
import "./nav.css"
import {FiHome} from 'react-icons/fi'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
// import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Button = ({
  active,
  url,
  onClick,
  ...props
 }) => {
  return(
    <a href={url} onClick={onClick} className= {active ? 'active' :''}>{props.children}</a> 
  )
}

const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav className = 'navbar'>
     <Button active={activeNav==='#'} url='#' onClick={()=> setActiveNav('#')}>  <FiHome/>  </Button>
     <Button active={activeNav==='#about'} url='#about' onClick={()=> setActiveNav('#about')}>  <BiUserCircle/>  </Button>
     <Button active={activeNav==='#experience'} url='#experience' onClick={()=> setActiveNav('#experience')}>  <AiOutlineBook/>  </Button>
     {/* <Button active={activeNav==='#contact'} url='#contact' onClick={()=> setActiveNav('#contact')}>  <BiUserCircle/>  </Button> */}

      
    </nav>
  )
}

export default Nav