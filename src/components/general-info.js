import React from "react";

// img icons
import saveMoney from "../images/save-money-icon.png";
import safteyFirst from "../images/saftey-icon.png";
import location_icon from "../images/location-icon.png";

const GeneralInfo = ({ projectLinkRef }) => {
  return (
    <div className="general-info">
      <section className="about-me">
        <div className="general-info-container">
          <h2 className="aboutMe-title">About Me</h2>
          {/* why choose turtle speed! */}
          <p className="about-me-text">
            Renovations are a long term investment which will hugely increase
            the price of your properties. As an experienced renovator, my focus
            is on organizing the planning of each project which will guarantee
            the avoidance of costly errors that waste both time and resources.
            By planning the foundation of each project, it ensures the overall
            quality for a successful renovation. A well planned renovation leads
            to a <strong>long-lasting</strong> build without the need for any
            repair maintainance. Nevertheless, I look forward to transforming
            your ideal expectations in to reality!
          </p>
        </div>
      </section>

      <div className="local-message-wrapper-mobile">
        <img
          src={location_icon}
          alt="location icon"
          className="location-icon"
        />
        <p className="local-message">
          Local Renovator In the Greater Toronto Area
        </p>
      </div>

      <div className="benefit-grid">
        <section className="save-money">
          <div className="general-info-container general-benefit">
            <img
              src={saveMoney}
              alt="hand with coin to show saving money"
              className="save-money-icon"
            />
            <article className="saveMoney">
              <div className="bullet-point"></div>
              <p className="article-text">
                Plan your projects right the <strong>first time</strong> to{" "}
                <strong>minimize</strong> costly changes down the line
              </p>
            </article>
          </div>
        </section>

        <section className="safteyFirst">
          <div className="general-info-container general-benefit">
            <img
              src={safteyFirst}
              alt="hands holding up a shield"
              className="safety-icon"
            />
            <article className="saftey-article">
              <div className="bullet-point"></div>
              <p className="article-text">
                <strong>Safety</strong> is my <strong>top priority</strong> when
                executing renovation projects
              </p>
            </article>
          </div>
        </section>
      </div>
      <div className="view-projects-ref" ref={projectLinkRef}></div>
    </div>
  );
};

export default GeneralInfo;
