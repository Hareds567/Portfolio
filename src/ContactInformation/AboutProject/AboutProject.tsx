import React, { FC } from "react";
//Components
import ProjectInvolves from "./Project_involves/ProjectInvolves";
import Plannings from "./Planning/Planning";
import Deadline from "./Deadline/Deadline";
import Budget from "./Budget/Budget";
import TellMeMore from "./TellMeMore/TellMeMore";
//Local
import { Form } from "../ContactMe";
//CSS
import "./About_Project.css";

interface Props {
  form: Form;
  set_form: React.Dispatch<React.SetStateAction<Form>>;
}

const AboutProject: FC<Props> = ({ form, set_form }) => {
  return (
    <div className="about-project">
      <h3>Let's Discuss a project</h3>
      <div className="container">
        <ProjectInvolves />
        <Plannings />
        <Deadline />
        <Budget />
        <TellMeMore />
      </div>
    </div>
  );
};

export default AboutProject;
