"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
  };

  return (
    <div className="footer">
      <div className="container">
        {/* <img src="/shadowss.svg" className="shadows" alt="" />
      <div className="shadow-cont">
      </div> */}
        <div className="contains">
          <div className="footer-heading">
            <h1>ARE YOU READY TO EXPERIENCE EXCEPTIONAL HOME CARE SERVICES?</h1>
            <p>Contact Cilla Health Care Services today</p>
            <button onClick={() => handleClick("/contact")}>Contact us</button>
          </div>
          <div className="footer-info">
            <div className="footer-item">
              <span>Call</span>
              <p>
                <a href="tel:+14039187917" style={{ color: "inherit", textDecoration: "none" }}>
                  +1 (403) 918 7917
                </a>
              </p>
            </div>
            <div className="footer-item">
              <span>E-mail</span>
              <p>
                <a href="mailto:info@cillahealthcare.ca" style={{ color: "inherit", textDecoration: "none" }}>
                  info@cillahealthcare.ca
                </a>
              </p>
            </div>
            <div className="footer-item">
             
            </div>
          </div>
          <hr />
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/career">Careers</a>
            <div className="social-links">
              <a target="_blank" href="https://wa.me/+14039187917">
                WA
              </a>
              <a target="_blank" href="https://www.instagram.com/cilla_healthcare?igsh=MWYzMzFjcmptMHd1MA==">IG</a>
              <a target="_blank" href="https://www.facebook.com/Cilla.Healthcare">FB</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
