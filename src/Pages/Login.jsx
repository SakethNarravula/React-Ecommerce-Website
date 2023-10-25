import React from 'react';
import './CSS/login.css';
import { Link } from 'react-router-dom';




const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h2>Sign Up</h2>
        <div className="login-fields">
            <label htmlFor="name"><h4> Enter your Name</h4></label>
            <input type="text" id="name" placeholder='Enter your Name' />
            <label htmlFor="email"><h4>Enter your Email</h4></label>
            <input type="email" id="email" placeholder='Enter your Email '/>
            <label htmlFor="password"><h4>Enter your Password</h4></label>
            <input type="password" id="password" placeholder='Enter your password' />
            <label htmlFor="password"><h4>Confirm your password</h4></label>
            <input type="password" id="password" placeholder='Enter your password' />
        </div>
        <button>Sign Up</button>
        <p className="login-login">Already have an account ?<Link to="/Login" className='decoration'><span>Login..</span></Link></p>
        <div className="login-agree">
          <input type="checkbox" name="check" id="check" />
          <p>By continuning , i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
