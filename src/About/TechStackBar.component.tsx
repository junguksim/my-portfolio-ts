import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./TechStackBar.css";

interface Props {
  name: string;
  howMuchSkilled: number;
}

const TechStackBar: React.FC<Props> = ({ name, howMuchSkilled }) => {
  return (
    <div className="TechStackBar">
      <span className="TechName">{name}</span>
      <div className="TechProgress">
        <ProgressBar now={howMuchSkilled} label={`${howMuchSkilled}%`} />
      </div>
    </div>
  );
};

export default TechStackBar;
