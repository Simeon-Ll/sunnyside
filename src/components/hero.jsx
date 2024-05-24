import React from 'react'
import Nav from './nav'
import arrow from '../assets/images/icon-arrow-down.svg'

function hero() {
  return (
    <div className='hero'>
      <Nav />
      <h1>WE ARE CREATIVES</h1>
      <img src={arrow} alt="" className='arrow'/>
    </div>
  )
}

export default hero
