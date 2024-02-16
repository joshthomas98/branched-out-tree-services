import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="footer_menu pt-3">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/booknow">Book Now</a>
                  </li>
                </ul>
              </div>
              <div className="footer_copyright">
                <p>© 2024 Branched Out Tree Services. All Rights Reserved.</p>
                <p>Developed by Tech Minds Consulting</p>
              </div>
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
