/** @format */

import React from "react"
import "./menu.css"
import images from "../../constants/images"
import data from "../../constants/data"
import SubHeading from "../../components/SubHeading/SubHeading"
import MenuItem from "../../components/MenuItem/MenuItem"
function Menu() {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title='Menu that fits you palatte' />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>
      <div className='app__menu-menu'>
        <div className='app__menu-menu_tea flex__center'>
          <p className='app__menu-menu_heading'>Coffee & Tea</p>
          <div className='app__menu-menu_items'>
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className='app__menu-menu_img'>
          <img src={images.menu} alt='Menu' />
        </div>
        <div className='app__menu-menu_cocktails flex__center'>
          <p className='app__menu-menu_heading'>Cocktails</p>
          <div className='app__menu-menu_items'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button className='custom__button' type='button'>
          View More
        </button>
      </div>
    </div>
  )
}

export default Menu
