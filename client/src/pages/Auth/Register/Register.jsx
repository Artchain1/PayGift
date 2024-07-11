import React from 'react'
import signUp from "../../../../assets/signUp.png"
import { Link } from 'react-router-dom'
import "./Register.css"

const Register = () => {
  return (
    <div className='Register'>
      <div className='--Register-Flex'>
        <div className='--Register-Box'>
          <div>
            <h2>payGifty</h2>
            <h1>Sign UP</h1>
          </div>
          <div className='--Register-Form'>
            <form action="">
              <label htmlFor="email">Email</label> <br />
              <input type="email" placeholder='example@gmail.com' required/> <br />
              <label htmlFor="email">Name</label> <br />
              <input type="text" placeholder='Your Username' required/> <br />
              <label htmlFor="email">Password</label> <br />
              <input type="password" placeholder='Your Password' required/> <br />
              <label htmlFor="email">Confirm Password</label> <br />
              <input type="password" placeholder='Confirm Your Password' required/> <br />
              <button type='submit'>Sign Up</button>
              <p>Have An Account: <Link style={{color: "#f4803a"}} to='/login'>Sign In</Link></p>
            </form>
          </div>
        </div>
        <div className='Footer-Image'>
          <img src={signUp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register