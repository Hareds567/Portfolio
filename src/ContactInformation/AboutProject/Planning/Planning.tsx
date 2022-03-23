import React from "react";
//CSS
import "./Planning.css";
const Planning = () => {
  return (
    <div className="planning-container">
      <h4 className="project-tittle">What are you planning?</h4>
      <div>
        <label className="discuss-project-container">
          <input type="checkbox" />
          We need to launch a website
        </label>
        <label className="discuss-project-container">
          <input type="checkbox" />
          We need to redesign a website
        </label>
        <label className="discuss-project-container">
          <input type="checkbox" />
          We need to build a product
        </label>
        <label className="discuss-project-container">
          <input type="checkbox" />
          We don't know what we need. Let's talk
        </label>
      </div>
    </div>
  );
};

export default Planning;
