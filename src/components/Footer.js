import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
       
        
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link to="/" className="social-logo">
                <img src={require('../images/logo.png')} alt="logo"></img>
                PC STORE
              </Link>
            </div>
            <small class="website-rights">Endri Dollani © 2022</small>
           
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
