import React from "react";
//Styles
import "./styles.css";

//Components
import Content_1 from "./Content_1/Content_1";
const Container3 = () => {
  const [isVisible, set_isVisible] = React.useState(false);
  const onClick = () => {
    set_isVisible(true);
  };
  return (
    <div>
      <div className="homepage-container-2">
        {/* <img className="homepage-container-2-image" src={image2} /> */}
        <div className="laptop-screen">
          <div className="homepage-information-container2">
            {!isVisible ? (
              <div className="first-screen">
                <h1 onClick={onClick}>
                  I offer solutions to your problems &#8250;{" "}
                </h1>
              </div>
            ) : (
              <Content_1 set_isVisible={set_isVisible} />
            )}
          </div>
        </div>
        <div className="laptop-bottom"></div>
      </div>
    </div>
  );
};

export default Container3;
