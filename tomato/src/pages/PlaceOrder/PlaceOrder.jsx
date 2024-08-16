import React, { useContext, useState } from 'react';
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext';

function PlaceOrder() {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div>
      <form className='place-order' action="">
        <div className="place-order-left">
            <p className='title'>Delevery Information</p>
            <div className="multi-fields">
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
            </div>
            <input type="email" placeholder='Your email' />
            <input type="text" placeholder='Street' />
            <div className="multi-fields">
              <input type="text" placeholder='City'/>
              <input type="text" placeholder='State'/>
            </div>
            <div className="multi-fields">
              <input type="text" placeholder='Zip code'/>
              <input type="text" placeholder='Country'/>
            </div>
            <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO Payment</button>
        </div>

        </div>
      </form>
    </div>
  )
}

export default PlaceOrder