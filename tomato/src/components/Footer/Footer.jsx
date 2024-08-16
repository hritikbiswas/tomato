import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate totam vel optio commodi sapiente soluta nemo ullam, et suscipit sed deserunt expedita architecto aliquid? Magnam ab adipisci temporibus molestiae.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+92 8737838389</li> 
                    <li>tomato@gmail.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">copyright 2024 @ Tomato.com all rights are reserved</p>
    </div>
  )
}

export default Footer