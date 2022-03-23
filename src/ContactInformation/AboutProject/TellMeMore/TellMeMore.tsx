import React from "react";
//CSS
import "./TellMeMore.css";

const TellMeMore = () => {
  const [text, set_text] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_text(e.target.value);
  };
  return (
    <div className="tellMeMore-container">
      <h4 className="project-tittle">Tell me more</h4>
      <p className="questions">
        Why are you looking to start this project now? What business problem
        will be solving by completing this project? Any extra details that you
        would like to share?
      </p>
      <input type="text" value={text} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default TellMeMore;
