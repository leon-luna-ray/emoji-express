import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='py-[1rem] fixed top-0 w-full'>
      <div className='container flex justify-between items-center'>
        <Link to='/'>
          <span id="logo">EmojiExpress</span>
        </Link>
        <nav>
          <ul className='flex gap-x-[1rem]'>
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