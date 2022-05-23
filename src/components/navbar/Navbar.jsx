import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Image from '../Images/Image'
import { APP_NAME } from '../../lib/config'
import { clearLocalStorage } from '../../lib/session'

function Navbar() {
  const location=useLocation()
  const navigate=useNavigate()
  const pathname=location.pathname
  console.log(location);
  const logout=()=>{
    clearLocalStorage()
    navigate('/')
  }
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className="navbar_row">
          <div className="navbar_left d-flex align-items-center ">
            <Link to="/">
              <Image src='/icons/app_Icon.png' alt="/icons/icon_not_found.png" width="50"/>
            </Link>
            <h2 className='mx-2 font-weight-bold 'style={{color:"#29c6a5"}}>{APP_NAME}</h2>
          </div>
          {
            pathname==='/home'?
            <div className='d-flex gap-4 '>
              <div className='btn btn-lg btn-success' onClick={()=>{navigate('/addPost')}}>Create Post</div>
              <button className='btn btn-lg btn-dark' onClick={logout}>Logout</button>
            </div>
            :
          <div className='navbar_right'>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup">
                Signup
              </Link>
            </li>


          </div>
}
        </div>
      </div>

    </nav>
  )
}

export default Navbar