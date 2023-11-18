import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const { isLoggedIn, logOut } = useAuth();

  const isSelected = (path) => {
    return location.pathname === path;
  }

  return (
    <header className='py-[1rem] sticky top-0 w-full'>
      <div className='container flex justify-between items-center'>
        <Link to='/'>
          <span id="logo">EmojiExpress</span>
        </Link>
        <nav>
          <ul className='flex gap-x-[1rem]'>
            {isLoggedIn ?
              <>
                <li>
                  <Link to='/dashboard' className={isSelected('/dashboard') ? 'underline' : ''}>Dashboard</Link>
                </li>
                <li>
                  <Link onClick={logOut} to='/login'>Logout</Link>
                </li>
              </>
              :
              <li>
                <Link to='/login'>Login</Link>
              </li>
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header