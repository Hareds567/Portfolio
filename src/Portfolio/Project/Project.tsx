import React, { Dispatch, SetStateAction } from "react";
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
	activeProject: string;
};

const Project: React.FC<Props> = ({ ...props }) => {
	return (
		<div className='project-container'>
			<header>
				<h1>{props.title}</h1>
			</header>
			<article>
				<p>{props.description}</p>
			</article>
			<footer>
				<a href='https://github.com/CSC480-21S' target='_blank'>
					{props.github && <FontAwesomeIcon icon={faGithub} size='3x' />}
				</a>
			</footer>
		</div>
	);
};

export default Project;
