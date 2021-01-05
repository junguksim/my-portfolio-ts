import React from "react";
import "./ProjectDetail.css";

interface Props {
  title: string;
  isUploaded: boolean;
  imageUrl: string;
  description: string;
  clickLinkUrl: string;
}

const ProjectDetail: React.FC<Props> = ({
  title,
  isUploaded,
  imageUrl,
  description,
  clickLinkUrl,
}) => {
  const hoverButtonText = isUploaded ? "Link" : "Github";
  return (
    <div className="project-detail">
      <div className="project-summary">
        <div className="project-thumbnail">
          <img src={imageUrl} alt={title}></img>
          <div className="overlay"></div>
          <div className="project-thumbnail-button">
            <a href={clickLinkUrl}>{hoverButtonText}</a>
          </div>
        </div>
        <div className="project-title-and-summary">
          <p className="project-title">{title}</p>
          <span className="project-summary-description">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
