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
      <div className="row">
        <div className="TechName col-sm-3">{name}</div>
        <div className="TechProgress col-sm-9">
          <ProgressBar now={howMuchSkilled} label={`${howMuchSkilled}%`} />
        </div>
      </div>
    </div>
  );
};

export default TechStackBar;
