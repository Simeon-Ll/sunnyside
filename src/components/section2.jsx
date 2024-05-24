import React from 'react'
import img1 from '../assets/images/desktop/image-graphic-design.jpg'
import img1Mobile from '../assets/images/mobile/image-graphic-design.jpg'
import img2 from '../assets/images/desktop/image-photography.jpg'
import img2Mobile from '../assets/images/mobile/image-photography.jpg'


function section2() {
  return (
    <section className='section2'>
      <div className='section-block'>
        <picture>
            <source media="(max-width: 780px)" srcSet={img1Mobile} width={'100%'}/>
            <img src={img1} alt="" width={'100%'}/>
        </picture>
        <div className='section-text'>
            <h2>Graphic design</h2>
            <p>
                Great design makes you memorable. We deliver artwork that underscores
                your brand message and captures potential clients' attention.
            </p>
        </div>
      </div>
      <div className='section-block'>
        <picture>
            <source media="(max-width: 780px)" srcSet={img2Mobile} width={'100%'}/>
            <img src={img2} alt="" width={'100%'} />
        </picture>
        <div className='section-text'>
            <h2>Photography</h2>
            <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
            </p>
        </div>
      </div>
    </section>
  )
}

export default section2
