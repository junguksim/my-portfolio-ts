import React from "react";
import "./About.css";
import aboutData from "./aboutData";
import StrongPointBox from "./StrongPointBox.component";
import TechStackBar from "./TechStackBar.component";

const { myStrongPoints, myTechStacks } = aboutData;
function renderStrongPointBoxes() {
  return myStrongPoints.map(({ title, content, id }) => {
    return <StrongPointBox title={title} content={content} key={id} />;
  });
}

function renderTechStacks() {
  return myTechStacks.map(({ name, howMuchSkilled, id }) => {
    return (
      <TechStackBar name={name} howMuchSkilled={howMuchSkilled} key={id} />
    );
  });
}

function About() {
  return (
    <div className="About">
      <span className="about-heading">ABOUT</span>
      <div className="StrongPoints">{renderStrongPointBoxes()}</div>
      <div className="Profile">
        <div className="Profile-Image">
          <StrongPointBox
            title={"나는 고양이입니다"}
            content={"매우 귀엽습니다."}
          />
        </div>
        <div className="Profile-Stacks">{renderTechStacks()}</div>
      </div>
    </div>
  );
}

export default About;
