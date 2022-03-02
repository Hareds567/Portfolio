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
    { name: "Work", path: "/Portfolio", id: "portfolio" },
    { name: "About", path: "/About", id: "about" },

    {
      name: "Contact",
      path: "/Contact-Information",
      id: "contact-info",
    },
  ];
  const [header_isVisible, set_header_isVisible] = useState(true);

  //On load Header Timeout
  useEffect(() => {
    setTimeout(() => {
      set_header_isVisible(true);
    }, 10000);
  }, []);

  return (
    <div
      className="header"
      style={
        header_isVisible ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      <div className="navigation">
        {nav.map((element) => {
          return (
            <a>
              <b>{element.name}</b>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
