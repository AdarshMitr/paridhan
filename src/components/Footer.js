import React from 'react'
import logo from "../img/logo.png"

const Footer = () => {
  return (
    <div id='footer'> 
<img src={logo} id='flogo'/>
<div className='fContainer'>
<div className='fItem'>About</div>
<div className='fItem'>Contact</div>
<div className='fItem'>Help</div>
</div>

    </div>
  )
}

export default Footer