import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
//Styles
import "./Header.css";
type Navigation = {
  name: string;
  path: string;
  id: string;
};

const Header = () => {
  const nav: Navigation[] = [
    { name: "Home", path: "/home", id: "home" },
    { name: "Work", path: "/work", id: "portfolio" },
    { name: "About", path: "/about", id: "about" },

    {
      name: "Contact",
      path: "/contact",
      id: "contact-info",
    },
  ];
  //check local storage
  const checkLocalStorage = () => {
    console.log(
      `From header: ${window.localStorage.getItem("homePageIsRendered")}`
    );
    if (window.localStorage.getItem("homePageIsRendered")) return true;
    return false;
  };
  const [header_isVisible, set_header_isVisible] = useState(false);
  const [current, set_current] = useState<Navigation>();
  const [isAnimated, set_isAnimated] = useState<boolean>(checkLocalStorage());

  //On load Header Timeout
  useEffect(() => {
    set_current(nav[0]);
    if (checkLocalStorage()) {
      set_header_isVisible(true);
      return;
    } else {
      setTimeout(() => {
        set_header_isVisible(true);
      }, 5000);
    }
  }, []);

  const updateCurrent = (element: Navigation) => {
    if (current != element) set_current(element);
  };

  return (
    <div
      className={`${isAnimated ? "header-visited" : "header"}`}
      style={
        header_isVisible ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      <div className="navigation">
        {nav.map((element) => {
          return (
            <Link
              key={element.id}
              to={element.path}
              className={`header-nav ${
                current?.id == element.id ? "nav-isActive" : ""
              }`}
              onClick={() => updateCurrent(element)}
            >
              <b>{element.name}</b>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
