import React from 'react'
import img1 from '../assets/images/desktop/image-transform.jpg'
import img1Mobile from '../assets/images/mobile/image-transform.jpg'
import img2 from '../assets/images/desktop/image-stand-out.jpg'
import img2Mobile from '../assets/images/mobile/image-stand-out.jpg'

function section1() {
    let screenWidth = window.innerWidth
    
  return (
    <section className='section1'>
      <div className='section-container section-container-top'>
        <div className='section-text-cont'>
            <div className='section-text'>
                <h2>Transform your brand</h2>
                <p>
                    We are full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <button>
                    LEARN MORE
                    <div className='underline' style={{backgroundColor:'#fad400'}}></div>
                </button>
            </div>

        </div>
        <picture>
            <source media="(max-width: 780px)" srcSet={img1Mobile} width={'100%'}/>
            <img src={img1} alt="" width={'100%'}/>
        </picture>
        
      </div>

      <div className='section-container' >
        
        <picture>
            <source media="(max-width: 780px)" srcSet={img2Mobile} width={'100%'}/>
            <img src={img2} alt="" width={'100%'}/>
        </picture>
            <div className='section-text-cont'>
            <div className='section-text'>
                <h2>Stand out to the right audience</h2>
                <p>
                    Using a collaborative formula of designers, researchers, photographers, videographers and copywriters,
                    we'll build and extend your brand in digital places.
                </p>
                <button>
                    LEARN MORE
                    <div className='underline' style={{backgroundColor:'#fe7867'}}></div>
                </button>
            </div>
        
        </div>

      </div>
    </section>
  )
}

export default section1
