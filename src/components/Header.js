import React from 'react'
import logo from '../img/logo.png';
import user from '../img/user.png';
import cart from '../img/cart.png';

const Header = () => {
  return (
    <div className='header'>
      <div id='logo'>
      <img src={logo} alt='logo'/>
      </div>
       <div id='searchbar'> 
        <input type='text' id='searchbox' placeholder='search'/>
        <button className='searchbtn'>Search</button>
       </div>
       

       <div className='login'>
        <span className='name'>username</span>
        <img src={user} alt='user'className='user'/>
        <span className='name'>cart</span>
        <img src={cart} alt='cart' className='cart' /> 
       </div>
    </div>
  )
}

export default Header