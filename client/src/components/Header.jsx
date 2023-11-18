import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <header className='py-[1rem] sticky top-0 w-full'>
      <div className='container flex justify-between items-center'>
        <Link to='/'>
          <span id="logo">EmojiExpress</span>
        </Link>
        <nav>
          <ul className='flex gap-x-[1rem]'>
            {isLoggedIn ?
              <li>
                <Link onClick={logOut} to='/login'>Logout</Link>
              </li> :
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