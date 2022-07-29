import React from "react";
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from "react-router-dom";
import { APP_NAME } from "../lib/config";
import Navbar from "../components/navbar/Navbar";
import { getLocalStorage } from "../lib/session";
import { startLoader } from "../lib/global";

function LandingPage() {
  const navigate=useNavigate()
  // startLoader()
  if (getLocalStorage("token")) {
    console.log("sdsd");
    // navigate('/home')
     return <Navigate to="/home" replace />;
  }
  return (
    <>
      <Helmet>
        <meta name="description" content="login page" />
      </Helmet>
      <Navbar />
      {/* <div>LandingPage</div> */}
    </>
  );
}

export default LandingPage;
