import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { isLoggedIn, logOut, user } = useAuth();
  const location = useLocation();

  return (
    <header className='lg:pt-[1rem] w-full'>
      <div className='bg-black'>
        <div className='widget-padding flex justify-between items-center'>
          <Link to='/' className='logo-text '>
            <p>Emoji</p>
            <p>Express</p>
          </Link>
          <nav className='flex max-md:flex-col max-md:items-end gap-[0.5rem] items-center'>
            {!!user?.email &&
              <p className='text-yellow-300 font-[500] text-end'>{user.email}</p>
            }
            {!!isLoggedIn &&
              <button onClick={logOut} to='/login' className='btn red'>Logout</button>
            }
            {!isLoggedIn && location.pathname !== '/login' &&
              <Link to='/login' className='btn green'>
                Login
              </Link>
            }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header