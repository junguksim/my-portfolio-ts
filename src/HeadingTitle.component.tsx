import React from "react";
import "./HeadingTitle.css";

interface Props {
  title: string;
}

const HeadingTitle: React.FC<Props> = ({ title }) => {
  return <span className="heading-title">{title}</span>;
};

export default HeadingTitle;
