import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const isAboutUsPage = window.location.href.includes("about-us");
  const isProfilePage = window.location.href.includes("profile");

  const value = localStorage.getItem("email");
  console.log("value", value);

  function logout() {
    setIsLoggedIn(false);
    localStorage.setItem("isUserLoggedIn", false);
  }

  return (
    <div className={`navbar_container ${isAboutUsPage && "navbar_about_us"}`}>
      <div className="navbar">
        <div className="navbar_left">
          <img src="data:image/png;base64,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 " />
          {!isAboutUsPage && !isProfilePage && (
            <input placeholder="Search User" />
          )}
        </div>
        <div className="navbar_right">
          <p>Hi, Ashi</p>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about-us")}>About us</p>
          <p onClick={() => navigate("/profile")}>Profile</p>
          
          {!isAboutUsPage && !isProfilePage && (
            <button onClick={logout} data-testid="navbar_logout">
              Logout
            </button>
          )}
        </div>
      </div>
      <hr className="navbar_line" />
    </div>
  );
}

export default Navbar;
