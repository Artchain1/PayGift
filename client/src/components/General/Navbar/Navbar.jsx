import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div>
        <h2>payGifty</h2>
      </div>
      <div className='--Navbar-content'>
        <h3>Home</h3>
        <h3>Contact Us</h3>
        <h3>About</h3>
      </div>
      <div className='--Navbar-button'>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/auth">
          <button>Log In</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar