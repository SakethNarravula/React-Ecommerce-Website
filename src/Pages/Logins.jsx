import React from 'react';
import './CSS/logins.css';
import { Link } from 'react-router-dom';


const Logins = () => {
  return (
    <div className='logins'>
      <div className="logins-container">
        <h2>Log in</h2>
        <div className="logins-fields">
            <label htmlFor="email"><h4>Enter your Email</h4></label>
            <input type="email" id="email" placeholder='Enter your Email '/>
            <label htmlFor="password"><h4>Enter your Password</h4></label>
            <input type="password" id="password" placeholder='Enter your password' />
        </div>
        <button>Log in</button>
        <p className="login-login">If you don't have an account ?<Link to="/signup" className='decoration'><span>Signup</span></Link></p>
        </div>
    </div>
  )
}

export default Logins