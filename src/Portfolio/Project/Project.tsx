import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//Styles
import "./Project.css";

type Props = {
	image?: string;
	title: string;
	initial_Date?: Date;
	final_Date?: Date;
	description: string;
	github?: string;
};

const Project: React.FC<Props> = ({ ...props }) => {
	return (
		<div className='project-container'>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			{props.github && <FontAwesomeIcon icon={faGithub} size='3x' />}
		</div>
	);
};

export default Project;
