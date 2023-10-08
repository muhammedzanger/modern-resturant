/** @format */

import React from "react"
import "./aboutUs.css"
import images from "../../constants/images"

function AboutUs() {
  return (
    <div
      className='app__aboutus app__bg flex__center section__padding'
      id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='About_Spoon' className='spoon__img' />
          <p className='opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className='custom__button'>Know More</button>
        </div>

        <div className='p__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='Knife' />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='About_Spoon' className='spoon__img' />
          <p className='opensans'>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.{" "}
          </p>
          <button className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
