import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { isLoggedIn, logOut, user } = useAuth();

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
            {isLoggedIn ?
              <Link onClick={logOut} to='/login' className='btn label-text-3 red'>Logout</Link>
              :
              <Link to='/login' className='btn label-text-3 yellow'>
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