import React from "react";
import "./ViewWorkButton.css";

function ViewWorkButton() {
  return (
    <div>
      <button
        className="ViewWorkButton"
        onClick={() => {
          alert("hi!");
        }}
      >
        제가 참여한 작업들
      </button>
    </div>
  );
}

export default ViewWorkButton;
