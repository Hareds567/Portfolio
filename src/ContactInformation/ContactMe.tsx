import React from "react";
//Imports
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import copy from "copy-to-clipboard";
//Compontents
import AboutYourself from "./AboutYourself/AboutYourself";
import AboutBusiness from "./AboutBusiness/AboutBusiness";
import AboutProject from "./AboutProject/AboutProject";

//Types
// import { SocialMedia } from "../Types/Types";
//Styles
import "./ContactMe.css";

export type Form = {
  user: {
    name: string;
    email: string;
    phone?: string;
  };
  business: {
    organization: string;
    location?: string;
    product: string;
  };
  project: {
    elements: string[];
    objective: string[];
    deadline?: Date;
    budget: number[];
    more?: string;
  };
};

const ContactMe = () => {
  const [form, set_form] = React.useState<Form>({
    user: {
      name: "",
      email: "",
      phone: "",
    },
    business: { organization: "", location: "", product: "" },
    project: {
      budget: [],
      elements: [],
      objective: [],
      deadline: new Date(),
      more: "",
    },
  });

  const [page, set_page] = React.useState(0);

  return (
    <div className="contact-container" id="contact-info">
      <header>
        <h1>Lets make something awesome together</h1>

        <svg
          className="lightbulb"
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 21">
            <path
              id="bottom"
              d="M9 13H4L4.4512 15.256L4.5 15.5C4.6347 15.9121 4.73933 16.0296 5 16H8C8.28656 16.0052 8.38649 15.8746 8.5 15.5L9 13Z"
              stroke="white"
            />
            <path
              id="bulb"
              d="M3 10.3109C3.3032 10.596 3.5453 11.314 4 12.8109H9C9.22481 11.663 9.37087 11.0401 10 10.3109C10 10.3109 11 9.31085 11.5 8.31094C12 7.31104 11.9227 7.13015 12 6.31094C11.834 5.16854 11.7339 4.52701 11 3.31094C10.4649 2.49206 10.1281 2.05641 9.20648 1.51756C8.0119 1.04429 7.35988 0.955506 6.20647 1.01742C5.12084 1.01913 4.52302 1.13635 3.5 1.8108C2.71313 2.44056 2.36394 2.83914 2 3.31094C1.15242 4.34438 1.10525 4.91371 1 6.31094C1.02486 7.09647 1.16717 7.53362 1.5 8.31094C2.04042 9.24901 2.37804 9.65536 3 10.3109Z"
              stroke="white"
            />
          </g>
        </svg>
      </header>
      <form>
        {page === 0 ? (
          <>
            <AboutYourself form={form} set_form={set_form} />
            <AboutBusiness form={form} set_form={set_form} />{" "}
          </>
        ) : page === 1 ? (
          <AboutProject form={form} set_form={set_form} />
        ) : (
          "Completed"
        )}
        <div className="buttons">
          {page === 0 ? (
            <div
              className="next"
              onClick={() => {
                set_page(page + 1);
              }}
            >
              Next
            </div>
          ) : page === 1 ? (
            <>
              <div
                className="prev"
                onClick={() => {
                  set_page(page - 1);
                }}
              >
                Go Back
              </div>
              <div className="submit">Submit</div>
            </>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
