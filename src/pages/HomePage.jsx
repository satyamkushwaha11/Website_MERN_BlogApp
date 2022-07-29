import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../lib/session";
import Navbar from "../components/navbar/Navbar";
import PostViewCard from "../components/post/PostViewCard";
import { startLoader, stopLoader } from "../lib/global";

function HomePage() {
  // startLoader()
  if (!getLocalStorage("token")) {
    console.log("sdsd");
    // navigate('/home')
    return <Navigate to="/" replace />;
  } 

  // stopLoader()
  return (
    <div>
      <Navbar />
      <br />
      <br />
      
      <div className="d-flex Container ">
       
        <div className="homePage_posts col-8 mr-5 postion-sticky" style={{height:'80vh',overflowY:"scroll"}}>
          {/* <h1 className="mx-3 text-dark">Suggetion</h1>
          <br /> */}
          {
            [1,2,3,1,3,2].map((item,index)=>(
              <>
              <PostViewCard key={index}  />
              <br />
              </>

            ))
          }
          <PostViewCard   />
        </div>
        <div className="homePage_sidebar card col-4 position-sticky ">ramsdfs</div>
      </div>
    </div>
  );
}

export default HomePage;
