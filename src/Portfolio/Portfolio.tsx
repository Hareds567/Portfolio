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
				"Developed a web application in collaboration with IBM Inc. The project aimed to guide customers around the Price Chopper grocery store by using textual directions that indicate the fastest route towards the next item in an individual’s grocery list. Five teams worked with the guidance of IBM to build an application with a microservice architecture and Agile development. Personally, my main role in the project was to build the frontend of the application. But, part of my time went to working with the engine, usability, and quality analysis teams to revise the user interface, test the endpoints, and work with the deployment of the application.",
			github1: "https://github.com/CSC480-21S",
			keyName: "Aisles",
		},
		{
			title: "SUNY Oswego COVID-Tracker",
			description: "",
			github1:
				"https://github.com/Hareds567/Covid-19-Symptom-Tracker-and-Tracer-Android-Application",
			keyName: "COVID Tracker",
		},
		{
			title: "Bars at Oswego",
			description: "",
			github1: "https://github.com/Hareds567/bars-at-oswego",
			keyName: "Bars At Oswego",
		},
	];

	const [activeProject, set_activeProject] = useState(projects[0].title);

	return (
		<div className='portfolio-container'>
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
			{projects.map((project) => {
				if (activeProject === project.keyName) {
					return <Project project={project} activeProject={activeProject} />;
				}
			})}
		</div>
	);
};

export default Portfolio;
