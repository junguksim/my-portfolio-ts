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
        <td className="project-cell">
          <ProjectDetail
            key={id}
            title={title}
            isUploaded={isUploaded}
            imageUrl={imageUrl}
            description={description}
            clickLinkUrl={clickLinkUrl}
          />
        </td>
      );
    }
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <HeadingTitle title={"PROJECTS"} />
      <table className="projects-table">
        <tr>{renderProjects()}</tr>
      </table>
    </div>
  );
};

export default Projects;
