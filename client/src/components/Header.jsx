import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const { isLoggedIn, logOut, user } = useAuth();

  const isSelected = (path) => {
    return location.pathname === path;
  }

  return (
    <header className='lg:mt-[1rem] w-full'>
      <div className='bg-black'>

        <div className='p-[2rem] flex justify-between items-center'>
          <div className="flex flex-col text-yellow">

            <Link to='/' className='logo-text '>
              <p>Emoji</p>
              <p>Express</p>
            </Link>
          </div>
          <nav>
            <ul className='flex max-md:flex-col max-md:items-end gap-x-[1rem] font-[200]'>
              {isLoggedIn ?
                <>
                  {user?.email ?

                    <li>
                      <span className='text-yellow-300'>{user.email}</span>
                    </li> : ''
                  }
                  <li>
                    <Link to='/dashboard' className={isSelected('/dashboard') ? 'underline' : ''}>Dashboard</Link>
                  </li>
                  <li>
                    <Link onClick={logOut} to='/login' >Logout</Link>
                  </li>
                </>
                :
                <li>
                  <Link to='/login' className={isSelected('/login') ? 'underline' : ''}>
                    Login
                  </Link>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header