import React from "react";
import "./About.css";
import StrongPointBox from "./StrongPointBox.component";

function About() {
  return (
    <div className="About">
      <span className="about-heading">ABOUT</span>
      <div className="StrongPoints">
        <StrongPointBox />
        <StrongPointBox />
        <StrongPointBox />
        <StrongPointBox />
      </div>
    </div>
  );
}

export default About;
