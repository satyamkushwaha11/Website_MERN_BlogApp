import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Image from "../Images/Image";
import { APP_NAME } from "../../lib/config";
import { clearLocalStorage } from "../../lib/session";
import { Avatar } from "@mui/material";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  console.log(location);
  const logout = () => {
    clearLocalStorage();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="Container">
        <div className="navbar_row">
          <div className="navbar_left d-flex align-items-center ">
            <Link to="/">
              <Image
                src="/icons/app_Icon.png"
                alt="/icons/icon_not_found.png"
                width="50"
              />
            </Link>
            <h2 className="mx-2 font-weight-bold " style={{ color: "#29c6a5" }}>
              {APP_NAME}
            </h2>
          </div>
          <div className="w-50 fntSz-14">
            <div class="input-group ">
              <div class="form-outline w-75 h-100" >
                <input type="search" id="form1" placeholder="search" class="form-control " />
                
              </div>
              <button type="button" class="btn btn-success">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          {pathname === "/home" ? (
            <div className="d-flex gap-4 ">
              <div
                className="btn btn-lg btn-success text-center"
                onClick={() => {
                  navigate("/addPost");
                }}
              >
                Create Post
              </div>
              <button className="btn btn-lg btn-dark" onClick={logout}>
                Logout
              </button>
              <Avatar src="/broken-image.jpg" />
            </div>
          ) : (
            <div className="navbar_right">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
