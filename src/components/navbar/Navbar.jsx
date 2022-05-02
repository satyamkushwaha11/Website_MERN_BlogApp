import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Images/Image'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_container'>
        <div className="navbar_row">
          <div className="navbar_left">
            <Link to="/">
              <Image src='/icons/app_Icon.png' alt="/icons/icon_not_found.png" width="50"/>
            </Link>
          </div>
          <div className='navbar_right'>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/login">
                Signup
              </Link>
            </li>


          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar