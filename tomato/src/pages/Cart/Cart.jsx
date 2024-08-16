import React, { useContext } from 'react';
import "./Cart.css";
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {food_list,cartItem,removeFromCart,getTotalCartAmount}=useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0)
          {
            return(
              <>
              <div className="cart-item-title cart-items-item" >
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>

              </div>
              <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart