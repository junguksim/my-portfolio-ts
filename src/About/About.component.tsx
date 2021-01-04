import React from "react";
import "./About.css";
import StrongPointBox from "./StrongPointBox.component";
import TechStackBar from "./TechStackBar.component";

const myStrongPoints = [
  {
    title: "꾸준함",
    content: "저는 꾸준합니다",
  },
  {
    title: "배고픔",
    content: "저는 배고픕니다",
  },
  {
    title: "닭발",
    content: "오늘은 닭발 먹을겁니다",
  },
  {
    title: "맛있음",
    content: "닭발은 맛있습니다.",
  },
];

const myTechStacks = [
  {
    name: "Node.js",
    howMuchSkilled: 90,
  },
  {
    name: "Typescript",
    howMuchSkilled: 70,
  },
  {
    name: "Javascript",
    howMuchSkilled: 90,
  },
  {
    name: "NestJS",
    howMuchSkilled: 50,
  },
];

function renderStrongPointBoxes() {
  return myStrongPoints.map((strongPoint) => {
    const { title, content } = strongPoint;
    return <StrongPointBox title={title} content={content} />;
  });
}

function renderTechStacks() {
  return myTechStacks.map((techStack) => {
    const { name, howMuchSkilled } = techStack;
    return <TechStackBar name={name} howMuchSkilled={howMuchSkilled} />;
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
