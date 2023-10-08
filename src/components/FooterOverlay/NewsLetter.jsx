/** @format */

import React from "react"
import "./newsLetter.css"
import SubHeading from "../SubHeading/SubHeading"
function NewsLetter() {
  return (
    <div className='app__newsLetter'>
      <div className='app__newsLetter-header'>
        <SubHeading title='NewsLetter' />
        <h1 className='headtext__cormorant'>Subscribe To Our NewsLetter</h1>
        <p className='p__opensans'>And Never Forget Latest NewsLetter</p>
      </div>
      <div className='app__newsLetter-input flex__center'>
        <input type='email' placeholder='Enter Your E-mail Address' />
        <button className='custom__button' type='button'>
          Subscribe
        </button>
      </div>
    </div>
  )
}
export default NewsLetter
