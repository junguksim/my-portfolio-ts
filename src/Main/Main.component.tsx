import React from "react";
import "./Main.css";
import ViewWorkButton from "./ViewWorkButton.component";

function Main() {
  return (
    <div className="Main">
      <p className="introduce-heading">
        함께하고 싶은 개발자, <span className="introduce-name">심정욱</span>
        입니다. <br /> 풀스택이 되고 싶은 백엔드 개발자 입니다.
      </p>
      <p className="introduce-content">
        <br />
      </p>
      <ViewWorkButton />
    </div>
  );
}

export default Main;
