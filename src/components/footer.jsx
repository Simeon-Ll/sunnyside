import React from 'react'
import logo from '../assets/images/logo-cyan.svg'
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
function footer() {
  return (
    <div className='footer'>
      <img src={logo} alt=""  />
      <ul className='links'>
        <li><a href="##">About</a></li>
        <li><a href="##">Services</a></li>
        <li><a href="##">Projects</a></li>
      </ul>
      <ul className='socials'>
        <li>
            <a href="##"><img src={facebook} alt="" /></a>
        </li>
        <li>
            <a href="##"><img src={instagram} alt="" /></a>
        </li>
        <li>
            <a href="##"><img src={twitter} alt="" /></a>
        </li>
        <li>
            <a href="##"><img src={pinterest} alt="" /></a>
        </li>
      </ul>
    </div>
  )
}

export default footer
