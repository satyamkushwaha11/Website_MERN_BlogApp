import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Image from "../Images/Image";
import {signup} from "../../redux/actions/auth.action"
import { getLocalStorage, setLocalStorage } from "../../lib/session";

const initialData = {
  email: "",
  password: "",
};

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate=useNavigate()


  if (getLocalStorage("token")) {
    console.log("sdsd");
    // navigate('/home')
     return <Navigate to="/home" replace />;
  }

  const onSubmitSignup = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    };
    console.log(password,confirmPassword);
    if (password === confirmPassword) {
      dispatch(signup(payload))
      .then((data)=>{
        console.log(data.data,'data');
        setLocalStorage('userRole',data?.data?.role || "")
        setLocalStorage('token',data?.data?.token || "")
        setLocalStorage('userName',data?.data?.userName || "")
       
        navigate('/home', { replace: true })
      
        
      }).catch(err=>{
        console.log({err});
      })
    } else {
      alert("password is not maching");
    }
  };
  

  return (
    <>
      <Helmet>
        <title>Signup Page</title>
        <meta name="description" content="signup page" />
      </Helmet>
      <div className="Login_page">
        {/* <div className="Login_background">
          <div className="shape" />
          <div className="shape" />
        </div> */}
        <form className="Login_form">
          <h3>SignUp Here</h3>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" placeholder="Email" id="username"  onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password"  onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" id="confirm-password"  onChange={(e)=>setConfirmPassword(e.target.value)} />
          </div>

          <button onClick={(e)=>onSubmitSignup(e)}>Signup</button>
          <div className="social">
            <div className="go mr-4 ">
              <Image src="/icons/google.png" width={20} className="mx-2" />
              Google
            </div>
            <div className="fb ml-4">
              <Image src="/icons/facebook.png" width={20} className="mx-2" />
              Facebook
            </div>
          </div>
          <br />
          <div className="justify-content-center d-flex">
            <Link
              to="/login"
              className="btn-sm btn-danger text-decoration-none "
            >
              {" "}
              <h4> Login</h4>{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
