import React from "react";
import "./StrongPointBox.css";

interface Props {
  title: string;
  content: string;
}
const StrongPointBox: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="StrongPointBox">
      <div className="hexagon">
        <div className="hexagon-in1">
          <div className="hexagon-in2"></div>
        </div>
      </div>
      <p className="strong-point-heading">{title}</p>
      <span className="strong-point-content">{content}</span>
    </div>
  );
};

export default StrongPointBox;
