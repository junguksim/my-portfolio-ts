import React from "react";
import HeadingTitle from "../HeadingTitle.component";
import ProjectDetail from "./ProjectDetail.component";
import "./Projects.css";
import projectsData from "./projectsData";

const renderProjects = () => {
  const projectsArr = projectsData;
  return projectsArr.map(
    ({ title, isUploaded, imageUrl, description, clickLinkUrl, id }) => {
      return (
        <div className="project-cell">
          <ProjectDetail
            key={id}
            title={title}
            isUploaded={isUploaded}
            imageUrl={imageUrl}
            description={description}
            clickLinkUrl={clickLinkUrl}
          />
        </div>
      );
    }
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <HeadingTitle title={"PROJECTS"} />
      <div className="projects-table">
        <div className="projects-row">{renderProjects()}</div>
      </div>
    </div>
  );
};

export default Projects;
