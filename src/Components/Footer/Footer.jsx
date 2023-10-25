import React from 'react';
import './footer.css';
import logo from '../Assets/logo.png';
import {BsInstagram} from 'react-icons/bs';
import {BiLogoPinterest} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs';
import {FaXTwitter} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="logo" />
            <p>Urban Vogue</p>
        </div>
        <ul className="footer-links">
            <li>About</li>
            <li>Products</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Franchise</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <BsInstagram/>
            </div>
            <div className="footer-icons-container">
                <BiLogoPinterest/>
            </div>
            <div className="footer-icons-container">
                <BsWhatsapp/>
            </div>
            <div className="footer-icons-container">
                <FaXTwitter/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 -All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
