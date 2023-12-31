/** @format */

import React from "react"
import "./menuItem.css"
function MenuItem({ title, price, tags }) {
  return (
    <div className='app__menuItem'>
      <div className='app__menuItem-head'>
        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{ color: "#dcca87" }}>
            {title}
          </p>
        </div>
        <div className='app__menuItem-hash' />
        <div className='app__menuItem-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>
      <div className='app__menuItem-sub'>
        <p className='opensans' style={{ color: "#aaa" }}>
          {tags}
        </p>
      </div>
    </div>
  )
}

export default MenuItem
