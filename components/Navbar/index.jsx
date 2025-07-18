"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const services = [
  {
    title: "Alzheimer’s and Dementia Care",
    description:
      "This involves specialized support and services designed to meet the unique needs of individuals living with Alzheimer’s disease or other forms of dementia.",
    image: "/a-a-d-c.webp",
    slug: "alzheimers-and-dementia-care"
  },
  {
    title: "Companionship Service",
    description:
      "Our companionship service integrates daily living support with engaging companionship, offering a holistic approach to emotional, physical, and mental care.",
    image: "/c-s.webp",
    slug: "companionship-service"
  },
  {
    title: "Foot Care",
    description:
      "This involves specialized services aimed at maintaining the health and comfort of an individual’s feet.",
    image: "/f-c.webp",
    slug: "foot-care"
  },
  {
    title: "Nursing Care",
    description:
      "This encompasses a range of professional services provided by registered nurses and licensed practical nurses to manage and support patients’ health and well-being.",
    image: "/n-c.webp",
    slug: "nursing-care"
  },
  {
    title: "Palliative and End-of-Life Care",
    description:
      "This refers to specialized medical and supportive services aimed at improving the quality of life for individuals with serious, life-limiting illnesses.",
    image: "/p-a-e-o-l-c.webp",
    slug: "palliative-and-end-of-life-care"
  },
  {
    title: "Personal Hygiene",
    description:
      "Personal care involves support with essential activities of daily living, including washing, bathing, and dressing.",
    image: "/p-h.webp",
    slug: "personal-hygiene"
  },
  {
    title: "Respite Care",
    description:
      "Cilla Healthcare Services provides temporary relief for primary caregivers by offering short-term, professional care for individuals who need ongoing support.",
    image: "/r-c.webp",
    slug: "respite-care"
  },
  {
    title: "Safeguard Visits",
    description:
      "These are scheduled check-ins designed to ensure the safety and well-being of individuals receiving care.",
    image: "/s-v.webp",
    slug: "safeguard-visits"
  },
  {
    title: "Transportation Services",
    description:
      "Cilla Healthcare Services provide essential support for individuals who need assistance getting to and from various destinations.",
    image: "/t-s.webp",
    slug: "transportation-services"
  },
];

const Navbar = ({ data }) => {
  const [navClick, setNavClick] = useState(false);
  const [userNavClick, setUserNavClick] = useState(false);

  const router = useRouter();

  const navigate = (url) => router.push(url);



  return (
    <div className="NavbarDiv">
      <div className="NavbarContainer">
        {/* <img src="/motomi-logo.svg" alt="logo" className="logo" /> */}
        <img src="/cill-logo.svg" alt="logo" className="logo" />

        {/* <img src="/motomi-logo.svg" alt="logo" className="logo" /> */}

        <div className="menuitems">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/about")}>About Us</span>
          <span onClick={() => navigate("/contact")}>Contact Us </span>
          <span
            onClick={() => {
              navigate("/service");
            }}
          >
            Services
          </span>
          <span onClick={() => navigate("/career")}>Career</span>
        </div>
      </div>
      <div className="MobileContainer">
        <div className="logo-cont">
          <img src="/cilla-icon.svg" alt="logo" className="logo" />
          <div className="logo-text" >
            <p>Cilla</p>
            <p>Healthcare Services </p>
            {/* <p> Services</p> */}
          </div>
        </div>
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
            <a href="/contact">Contact Us</a>
            <a href="/career">Career</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
