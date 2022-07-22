import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
   <>
   <div className='navbar'>
    <div class='container-navbar '>
      <a href='/' style={{color:'white',textDecoration:'none'  , listStyle:'none'}}> <img id='navbarimg' src='https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png' alt='logo'/>
      RPS </a>
        <ul>
            <li className='li-nav' ><a style={{color:'white',textDecoration:'none'  , listStyle:'none'}} href='/' >Home</a></li>
            <li className='li-nav' ><a style={{color:'white',textDecoration:'none'  , listStyle:'none'}} href='/'>Contact Us</a></li>
            <li className='li-nav' ><a style={{color:'white',textDecoration:'none'  , listStyle:'none'}} href='/'>Form</a></li>
            <li className='li-nav' ><a style={{color:'white',textDecoration:'none'  , listStyle:'none'}} href='/'>Login</a></li>
        </ul>
    </div>
   </div>
   </>
  )
}
