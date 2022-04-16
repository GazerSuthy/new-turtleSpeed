import React from "react";

// icon
import contractorIcon from "../images/contractor-icon.png";
import projectData from "../projectData";
//react icon
import { Icon } from "@iconify/react";
import arrowRightSquareFill from "@iconify/icons-bi/arrow-right-square-fill";
import arrowLeftSquareFill from "@iconify/icons-bi/arrow-left-square-fill";

const ViewProjects = ({ setScrollTo }) => {
  const [projectIndex, setProjectIndex] = React.useState(0);
  const [pictureIndex, setPictureIndex] = React.useState(0);

  let currentProject = projectData[projectIndex];
  let pictureArray = currentProject.pictures;

  return (
    <div className="viewProjects">
      <section className="project-header">
        <div className="experience project-container">
          <img
            src={contractorIcon}
            alt="icon of renovator"
            className="renovator-icon"
          />
          <section className="experience-head">
            <h2 className="experience-head-title">
              <span className="highlight">Certified</span> Renovator
            </h2>
            <h5 className="experience-subhead">15+ years of experience</h5>
          </section>
        </div>
      </section>

      {projectIndex === 0 ? (
        <div
          className="section-label"
          onClick={() => {
            setProjectIndex(1);
            setPictureIndex(0);
          }}
        >
          <h1 className="label">Next Project</h1>
          <Icon className="right-arrow" icon={arrowRightSquareFill} />
        </div>
      ) : (
        <div
          className="section-label"
          onClick={() => {
            setProjectIndex(0);
            setPictureIndex(0);
          }}
        >
          <h1 className="label">Previous Project</h1>
          <Icon className="right-arrow" icon={arrowLeftSquareFill} />
        </div>
      )}

      {/* section 1 - current pic
            section 2 - progression tabs
            section 3 - project description
            section 4 - before pic
        */}
      <div className="project-container">
        <section className="display-project ">
          <div className="section-1 mobile-margin">
            <img
              src={pictureArray[pictureIndex]}
              alt="after shot of project"
              className="after-img"
            />
            <h6 className="pic-caption after-pic-caption">
              {pictureIndex === 0 ? "After" : "Progression "}
            </h6>
            <p className="project-intro">
              <span className="project-name">{currentProject.name}</span>

              <strong className="line">-</strong>

              <p className="into-text">{currentProject.intro}</p>
            </p>
          </div>

          <div className="section-2">
            <div
              // conditional class rendering based on value of pictureIndex
              className={`tab after-tab ${
                pictureIndex === 0 ? "current-tab" : ""
              }`}
              onClick={() => {
                setPictureIndex(0);
              }}
            >
              <h3 className="tab-title">After</h3>
            </div>
            <div
              className={`tab progression-tab ${
                pictureIndex === 2 ? "current-tab" : ""
              }`}
              onClick={() => {
                setPictureIndex(2);
              }}
            >
              <h3 className="tab-title">Progression 1</h3>
            </div>
            <div
              className={`tab progression-tab ${
                pictureIndex === 3 ? "current-tab" : ""
              }`}
              onClick={() => {
                setPictureIndex(3);
              }}
            >
              <h3 className="tab-title">Progression 2</h3>
            </div>
          </div>

          <div className="section-2-mobile">
            <div
              className={`option ${pictureIndex === 0 ? "current-tab" : ""}`}
              id="option-1"
              onClick={() => {
                setPictureIndex(0);
              }}
            >
              1
            </div>
            <div
              className={`option ${pictureIndex === 2 ? "current-tab" : ""}`}
              id="option-2"
              onClick={() => {
                setPictureIndex(2);
              }}
            >
              2
            </div>
            <div
              className={`option ${pictureIndex === 3 ? "current-tab" : ""}`}
              id="option-3"
              onClick={() => {
                setPictureIndex(3);
              }}
            >
              3
            </div>
          </div>

          <div className="section-4 mobile-margin">
            <img
              src={pictureArray[1]}
              alt="before shot of project"
              className="before-img"
            />
            <h6 className="pic-caption">Before</h6>
          </div>

          <div className="section-3">
            <article className="project-description">
              <h3>Project Description</h3>
              {currentProject.description}
            </article>
          </div>
        </section>

        {projectIndex === 0 ? (
          <div
            className="mobile-section-label"
            onClick={() => {
              setProjectIndex(1);
              setPictureIndex(0);
              setScrollTo("projects");
            }}
          >
            <h1 className="label mobile-label">Next Project</h1>
            <Icon
              className="right-arrow mobile-arrow"
              icon={arrowRightSquareFill}
            />
          </div>
        ) : (
          <div
            className="mobile-section-label"
            onClick={() => {
              setProjectIndex(0);
              setPictureIndex(0);
              setScrollTo("projects");
            }}
          >
            <h1 className="label mobile-label">Previous Project</h1>
            <Icon
              className="right-arrow mobile-arrow"
              icon={arrowLeftSquareFill}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProjects;
