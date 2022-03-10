import React from "react";

import image1 from "../../Images/homepage-image-1.jpg";
//Styles
import "./styles.css";
const Container2 = () => {
  return (
    <>
      <div className="homepage-container-1">
        <img className="homepage-container-1-image" src={image1} />
        <div className="homepage-content-1">
          <span className="homepage-content-1-title">
            Web Design and Development
          </span>
          <span className="homepage-content-1-subheader">
            I develop ideas that makes people lives easier
          </span>
        </div>
      </div>
    </>
  );
};

export default Container2;
