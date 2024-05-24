import React from 'react'
import data from '../gallery-data'

function gallery() {
  return (
    <div className='gallery'>
      {data.map(image => (
        <picture>
            <source media="(max-width: 780px)" srcset={image.mobileImg} />
            <img src={image.desktopImg} alt="" />
        </picture>
      ))}
    </div>
  )
}

export default gallery
