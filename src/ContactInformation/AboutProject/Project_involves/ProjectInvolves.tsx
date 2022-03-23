import React from "react";
//CSS
import "./ProjectInvolves.css";

const ProjectInvolves = () => {
  return (
    <div className="project-involves-container">
      <h4 className="project-tittle">The project involves:</h4>
      <div>
        <label className="discuss-project-container">
          <input type="checkbox" />
          Web Software &#38; websites
        </label>
        <label className="discuss-project-container">
          <input type="checkbox" />
          Redesign of existing site
        </label>
        <label className="discuss-project-container">
          <input type="checkbox" />
          Optimization
        </label>
        <label className="discuss-project-container">
          <input type="checkbox" />
          Other
        </label>
      </div>
    </div>
  );
};

export default ProjectInvolves;
