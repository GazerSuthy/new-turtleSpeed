import React from "react";

// icons
import { Icon } from "@iconify/react";
import phoneIcon from "@iconify/icons-akar-icons/phone";

const Header_Section = ({ setScrollTo }) => {
  return (
    <section className="header-section">
      <div className="header-container">
        <div
          className="logo-container"
          onClick={() => {
            setScrollTo("home");
          }}
        >
          <h1 className="logo">
            <span className="purple-highlight">Perfect</span> Universe
            Renovations
          </h1>
        </div>

        {/* Contact info */}

        <div className="phone-details">
          <Icon icon={phoneIcon} className="contact-icon-phone" />
          <p className="phone-num">647-622-9169</p>
        </div>

        {/* desktop navigation */}
        <nav className="main-nav">
          <ul>
            <li
              className="nav-link-wrapper"
              onClick={() => {
                setScrollTo("home");
              }}
            >
              <p className="nav-link">Home</p>
            </li>
            <li
              className="nav-link-wrapper"
              onClick={() => {
                setScrollTo("projects");
              }}
            >
              <p className="nav-link">Projects</p>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header_Section;
