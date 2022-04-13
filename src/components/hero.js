import React from "react";

import location_icon from "../images/location-icon.png";

const Hero = ({ setScrollTo }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-tagline">
          <span className="tagline-highlight">Longetivity</span>,{" "}
          <span className="tagline-highlight">Quality</span>,{" "}
          <span className="tagline-highlight">Affordable</span>, Renovations
          From Turtle Speed Inc
        </h1>

        <button
          className="view-projects"
          onClick={() => {
            setScrollTo("projects");
          }}
        >
          View Projects
        </button>

        <div className="local-message-wrapper">
          <img
            src={location_icon}
            alt="location icon"
            className="location-icon"
          />
          <p className="local-message">
            Local Renovator In the Greater Toronto Area
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
