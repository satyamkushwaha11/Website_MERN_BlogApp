import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { Link, Navigate,useNavigate} from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../lib/session";
import { login } from "../../redux/actions/auth.action";
// import Image from '../Images/Image'

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate=useNavigate()

  if (getLocalStorage("token")) {
    console.log("sdsd");
    // navigate('/home')
     return <Navigate to="/home" replace />;
  }

  const onSubmintLogin = (e) => {
    const loginPayload = {
      email,
      password,
    };
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(login(payload))
    .then((data)=>{
      console.log(data.data,'data');
      setLocalStorage('userRole',data?.data?.role || "")
      setLocalStorage('token',data?.data?.token || "")
      setLocalStorage('userName',data?.data?.userName || "")
      // setLocalStorage('userRole',data?.data?.role || "")
      // setLocalStorage('userRole',data?.data?.name || "")
      // return <Navigate to="/home" replace={true} />
      navigate('/home', { replace: true })
    
      
    }).catch(err=>{
      console.log({err});
    })
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="login page" />
      </Helmet>
      <div className="Login_page">
        {/* <div className="Login_background">
          <div className="shape" />
          <div className="shape" />
        </div> */}
        <form className="Login_form">
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
          <button className="" onClick={(e) => onSubmintLogin(e)}>
            Log In
          </button>
          <br />
          <br />
          <br />
          <br />
          <div className="justify-content-center d-flex">
            <Link to="/signup" className="btn-sm btn-danger">
              <h4>SignUp</h4>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
