import React from 'react'
import data from '../testimonial-data'

function testimonials() {
  return (
    <section className='testimonials'>
      <h2>CLIENT TESTIMONIALS</h2>
      <div className='testimonial-container'>
        {data.map(test => (
            <div className='testimonial-block'>
                <img src={test.image} alt="" />
                <p>{test.testimonial}</p>
                <h3>{test.name}</h3>
                <span>{test.title}</span>
            </div>
        ))}
      </div>
    </section>
  )
}

export default testimonials
