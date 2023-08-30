import React from "react";
import "../../../dist-styles/footer.css";
import CategoriesList from "../CategoriesElements/CategoriesList";
import FacebookIcon from "../../../images/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../../../images/shared/desktop/icon-instagram.svg";
import TwitterIcon from "../../../images/shared/desktop/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-container">
        <div className="logo-text-container">
          <h3>audiophile</h3>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team <br></br>
            of music lovers and sound specialists who are devoted to helping you
            get the <br></br>
            most out of personal audio. Come and visit our demo facility - we're
            open 7 <br></br>
            days a week.
          </p>
          <small>Copyright 2021. All Rights Reserved</small>
        </div>
        <div className="navbar-social-container">
          <nav>
            <CategoriesList
              listClass="footer-categories-list"
              linkClass="footer-list-element"
            />
          </nav>
          <div className="footer-socials">
            <a href="#">
              <img src={FacebookIcon} alt="facebook-icon" className="social-icon"></img>
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="twitter-icon" className="social-icon"></img>
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="instagram-icon" className="social-icon"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
