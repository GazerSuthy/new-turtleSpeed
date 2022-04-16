import React from "react";

import { Icon } from "@iconify/react";
import phoneIcon from "@iconify/icons-akar-icons/phone";
import emailIcon from "@iconify/icons-carbon/email";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h3 className="contact-title">Contact</h3>

        <div className="phone-contact">
          <Icon icon={phoneIcon} className="footer-icon" />
          <p className="phone-num">647-622-9169</p>
        </div>

        <div className="email-contact">
          <Icon icon={emailIcon} className=" footer-icon" />
          <p className="email">perfectuniversegta@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
