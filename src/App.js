import React from "react";

import "./App.css";
import GeneralInfo from "./components/general-info";
import Header_Section from "./components/header";
import Hero from "./components/hero";
import ViewProjects from "./components/view-projects";

function App() {
  /* =======================
    Handles Auto Scrolling
  ==========================*/
  const [scrollTo, setScrollTo] = React.useState("");
  const projectLinkRef = React.useRef(null);

  // scroll functions
  const scrollToHome = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  const scrollToProjects = () => {
    projectLinkRef.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (scrollTo === "home") {
      scrollToHome();
      setScrollTo("");
    } else if (scrollTo === "projects") {
      scrollToProjects();
      setScrollTo("");
    }
  });

  return (
    <div className="App">
      <Header_Section setScrollTo={setScrollTo}></Header_Section>
      <Hero setScrollTo={setScrollTo}></Hero>
      <GeneralInfo projectLinkRef={projectLinkRef}></GeneralInfo>
      <ViewProjects setScrollTo={setScrollTo}></ViewProjects>
    </div>
  );
}

export default App;
