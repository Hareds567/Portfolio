import React, { FC } from "react";
import Container1 from "./Body_1/Container1";
import Container2 from "./Body_2/Container2";
import Container3 from "./Body_3/Container3";
import Container4 from "./Body_4/Container4";

const HomePage = () => {
  const [isVisible, set_isVisible] = React.useState(false);
  const [homePageIsRendered, set_homePageIsRendered] = React.useState<boolean>(
    () => {
      if (window.localStorage.getItem("homePageIsRendered")) return true;
      return false;
    }
  );

  //Check if page have been rendered before
  //If not type animation is enabled
  //Else loads page normally
  React.useEffect(() => {
    if (homePageIsRendered) {
      set_isVisible(true);
    } else {
      setTimeout(() => {
        set_isVisible(true);
        set_homePageIsRendered(true);
      }, 11000);
    }
  }, []);

  //Once Homepage has been reached update local storage
  React.useEffect(() => {
    window.localStorage.setItem("homePageIsRendered", "true");
  }, [homePageIsRendered]);
  return (
    <>
      <Container1 homePageIsRendered={homePageIsRendered} />
      {isVisible ? (
        <>
          <Container2 />
          <Container3 />
          <Container4 />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomePage;
