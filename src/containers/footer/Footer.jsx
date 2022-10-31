import React from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="row">
        <div className="footer__col">
          <div className="footer__logo first">
            <img src={logo} alt="logo" />
            <p>Stay organized and productive with Fintask.io</p>
          </div>
        </div>

        <div className="footer__col second">
          <div className="footer__col__content">
            <h4>Explore</h4>
            <p>
              <a href="#">Pricing</a>
            </p>
            <p>
              <a href="#">Integration</a>
            </p>
            <p>
              <a href="#">Download</a>
            </p>
            <p>
              <a href="#">Blog</a>
            </p>
            <p className="soon">
              <a href="#">Features</a>
            </p>
          </div>
        </div>

        <div className="footer__col last">
          <div className="footer__col__content">
            <h4>Keep in touch</h4>
          </div>

          <div className="footer__col__content social">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

        <div className="footer__copyright">
          <div className="footer__copyright__left">
            <p>
              © {new Date().getFullYear()} Webuir 2022 · All rights reserved
            </p>
          </div>

          <div className="footer__copyright__right">
            <a href="#">Cookies</a>
            <a href="#">Privacy policy</a>
            <a href="#">Security</a>
            <a href="#">Legal documents</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
