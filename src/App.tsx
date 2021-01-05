import React from "react";
import "./App.css";
import Main from "./Main/Main.component";
import About from "./About/About.component";
import Projects from "./Projects/Projects.component";

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Projects />
    </div>
  );
}

export default App;
