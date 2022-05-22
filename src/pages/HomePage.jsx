import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../lib/session";
import Navbar from "../components/navbar/Navbar";
import PostViewCard from "../components/post/PostViewCard";

function HomePage() {
  if (!getLocalStorage("token")) {
    console.log("sdsd");
    // navigate('/home')
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Navbar />
      <br />
      <div className="d-flex container ">
        <div className="homePage_posts w-75  mr-5">
          <PostViewCard   />
        </div>
        <div className="homePage_sidebar card">ram</div>
      </div>
    </div>
  );
}

export default HomePage;
