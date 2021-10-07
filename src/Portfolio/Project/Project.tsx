import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//Styles
import "./Project.css";
//Types
import { Project as project } from "../../Types/Types";

type Props = {
	project: project;
	activeProject: string;
};

const Project: React.FC<Props> = ({ ...props }) => {
	return (
		<div className='project-container'>
			<div>
				<header>
					<h1>{props.project.title}</h1>
				</header>
				<article>
					<p>{props.project.description}</p>
				</article>
				<section>
					<a href='https://github.com/CSC480-21S' target='_blank'>
						{props.project.github1 && (
							<FontAwesomeIcon icon={faGithub} size='3x' />
						)}
					</a>
				</section>
			</div>
		</div>
	);
};

export default Project;
