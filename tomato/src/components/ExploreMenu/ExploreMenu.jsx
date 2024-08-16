import React from 'react';
import './ExploreMenu.css'
import {menu_list} from "../../assets/assets"

function ExploreMenu({category,SetCategory}) {
  return (
    <>
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore our menu</h2>
        <p className='explore-menu-text'>Choose from diverse featuring a delectable array of dishes crafted with finest ingredients that satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>SetCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                        
                    </div>
                
                )
            })}
        </div>
        <hr />

    </div>
    </>
  )
}

export default ExploreMenu