import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Images/Image'

function Signup() {
  // const []


  return (
    <>
      <div className='Login_page'>
        {/* <div className="Login_background">
          <div className="shape" />
          <div className="shape" />
        </div> */}
        <form className='Login_form'>
          <h3>SignUp Here</h3>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" placeholder="Email or Phone" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder="Password" id="password" />
          </div>


          <button>Signup</button>
          <div className="social">
            <div className="go mr-4 "><Image src="/icons/google.png" width={20} className='mx-2' />Google</div>
            <div className="fb ml-4"><Image src="/icons/facebook.png" width={20} className='mx-2' />Facebook</div>
          </div>
          <br />
          <div className='justify-content-center d-flex'>
            <Link to='/login' className='btn-sm btn-danger text-decoration-none '> <h4>  Login</h4> </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup