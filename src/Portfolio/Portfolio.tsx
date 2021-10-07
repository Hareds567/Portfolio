import { type } from "os";
import React, { useState } from "react";

//Components
import Project from "./Project/Project";
import Icons from "./Icons/Icons";
//Styles
import "./Portfolio.css";
//Types
import { Project as project } from "../Types/Types";

const Portfolio = () => {
	const projects: project[] = [
		{
			title: "Aisles",
			description:
				"A web application developed in collaboration with IBM Inc. The project aimed to guide customers around Price Chopper Grocery Store by using textual directions that indicate the fastest route towards the next item in an individual’s grocery list. I participated in the development of the front-end using React and frameworks such as Redux, Material UI, and more. Other tasks included working with other teammates to test and further improve various endpoints of the different microservices.",
			github1: "https://github.com/CSC480-21S",
			keyName: "Aisles",
		},
		{
			title: "SUNY Oswego COVID-Tracker",
			description:
				"An android application whose goal is to alert Students, Faculty, and Staff who have been in contact with individuals who contracted COVID-19. I worked on the development of the graphic interface and a server-side rendered web app with EJS. Further work includes managing a MongoDB database and sections of the backend.",
			github1:
				"https://github.com/Hareds567/Covid-19-Symptom-Tracker-and-Tracer-Android-Application",
			keyName: "COVID Tracker",
		},
		{
			title: "Bars at Oswego",
			description: "5",
			github1: "https://github.com/Hareds567/bars-at-oswego",
			keyName: "Bars At Oswego",
		},
	];

	const [activeProject, set_activeProject] = useState(projects[0].title);

	return (
		<div className='portfolio-container' id='portfolio'>
			<div className='project-icons'>
				{projects.map((project) => {
					return (
						<Icons
							key={project.keyName}
							title={project.keyName}
							activeProject={activeProject}
							set_activeProject={set_activeProject}
						/>
					);
				})}
			</div>
			<div>
				{projects.map((project) => {
					if (activeProject === project.keyName) {
						return <Project project={project} activeProject={activeProject} />;
					}
				})}
			</div>
		</div>
	);
};

export default Portfolio;
