import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Image from '../Images/Image'


const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const dispatch=useDispatch()


  const onSubmintLogin=()=>{
    const loginPayload={
      email,
      password
    }
    // dispatch()

  }

  return (
    <>
      <div className='Login_page'>
        {/* <div className="Login_background">
          <div className="shape" />
          <div className="shape" />
        </div> */}
        <form className='Login_form'>
          <h3>Login Here</h3>
          <div>
            <label htmlFor="username">Email</label>
            <input
              type="text"
              placeholder="Email or UserName"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className=''
            onClick={onSubmintLogin}
          >
            Log In
          </button>
          <br />
          <br />
          <br />
          <br />
          <div className='justify-content-center d-flex'>
            <Link to='/signup' className='btn-sm btn-danger'>
              <h4>SignUp</h4>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login