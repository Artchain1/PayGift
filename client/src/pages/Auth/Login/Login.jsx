import React from 'react'
import './Login.css'
import { cartImg } from "../../../../assets";


const Login = () => {
  return (
    <div className='logCon'>
      <div className='inputCon'>
        <h2>PayGift</h2>
        <div className='inputBox'>
        <div className='logText'>
         <p>Welcome back !!!</p>
         <h3>Sign in</h3>
        </div>
        <div>
        <form className="form">
        <div className="formColumn">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="testing@gmail.com"
              required
              
             
            />
          </div>
          <div className="formColumn">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="********"
              name="password"
              
            />
          </div>

          <button>Get started</button>
        </form>
        
        </div>
       
        <div className='logIn'>
        <p>i dont have an account ? <span>Sign up</span></p>
        </div>
        </div>
        
      </div>
      <div className='logImg'>
      <img src={cartImg} alt="cartImg" className='logPic'/>
      </div>
    </div>
  )
}

export default Login