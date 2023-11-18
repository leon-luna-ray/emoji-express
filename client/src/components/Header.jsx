import React from 'react'
import { Link } from "react-router-dom";
import '../styles/components/Header.css'

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <span id="logo">EmojiExpress</span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar