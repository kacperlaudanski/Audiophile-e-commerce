import "../../../dist-styles/footer.css";
import CategoriesNavList from "../CategoriesElements/CategoriesNavList";
import FacebookIcon from "../../../images/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../../../images/shared/desktop/icon-instagram.svg";
import TwitterIcon from "../../../images/shared/desktop/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-container">
        <div className="logo-text-container">
          <h3 className="footer-logo">audiophile</h3>
          <p className="footer-description">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <small>Copyright 2021. All Rights Reserved</small>
        </div>
        <div className="footer-nav-social-container">
          <nav>
              <CategoriesNavList listClass="footer-categories-list" />
          </nav>
          <div className="footer-socials">
            <a href="javascript:void(0)">
              <img
                src={FacebookIcon}
                alt="facebook-icon"
                className="social-icon"
              ></img>
            </a>
            <a href="javascript:void(0)">
              <img
                src={TwitterIcon}
                alt="twitter-icon"
                className="social-icon"
              ></img>
            </a>
            <a href="javascript:void(0)">
              <img
                src={InstagramIcon}
                alt="instagram-icon"
                className="social-icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
