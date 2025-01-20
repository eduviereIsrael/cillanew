"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";


const Navbar = ({ data }) => {
  const [navClick, setNavClick] = useState(false);
  const [userNavClick, setUserNavClick] = useState(false);

  const router = useRouter();

  const navigate = (url) => router.push(url);

  return (
    <div className="NavbarDiv">
      <div className="NavbarContainer">
        {/* <img src="/motomi-logo.svg" alt="logo" className="logo" /> */}
        <img src="/cilla.svg" alt="logo" className="logo" />

        {/* <img src="/motomi-logo.svg" alt="logo" className="logo" /> */}


        <div className="menuitems">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/about")}>About Us</span>
          <span onClick={() => navigate("/about")}>Contact </span>
        </div>
        <div className="nav-buttons">
            <span className="login">Book Now</span>

        </div>
      </div>
      <div className="MobileContainer">
        <img src="/cilla.svg" alt="logo" className="logo" />
        <div
          className={navClick ? "hambuga spin" : "hambuga"}
          onClick={() => {
            setNavClick(!navClick);
          }}
        >
          <div className="ham dis"></div>
          <div className="ham spins"></div>
          <div className="ham spins-i"></div>
          <div className="ham dis"></div>
        </div>
        <div className={navClick ? "mob-menu-div menu-show" : "mob-menu-div "}>
          <div className="mob-menu-div-cont">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
