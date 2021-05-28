import { type } from "os";
import React, { useState } from "react";

//Components
import Project from "./Project/Project";
import Icons from "./Icons/Icons";
//Styles
import "./Portfolio.css";

type project = {
	image?: string;
	title: string;
	initial_Date?: Date;
	final_Date?: Date;
	description: string;
	github: string;
	keyName: string;
};
const Portfolio = () => {
	const [activeDiv, set_activeDiv] = useState<HTMLDivElement>();
	const projects: project[] = [
		{
			title: "Aisles",
			description:
				"Developed a web application in collaboration with IBM Inc. The project aimed to guide customers around the Price Chopper grocery store by using textual directions that indicate the fastest route towards the next item in an individual’s grocery list. Five teams worked with the guidance of IBM to build an application with a microservice architecture and Agile development. Personally, my main role in the project was to build the frontend of the application. But, part of my time went to working with the engine, usability, and quality analysis teams to revise the user interface, test the endpoints, and work with the deployment of the application.",
			github: "https://github.com/CSC480-21S",
			keyName: "Aisles",
		},
		{
			title: "SUNY Oswego COVID-Tracker",
			description: "",
			github: "",
			keyName: "COVID Tracker",
		},
		{
			title: "Bars at Oswego",
			description: "",
			github: "",
			keyName: "Bars At Oswego",
		},
	];
	return (
		<div className='portfolio-container'>
			<div className='project-icons'>
				{projects.map((project) => {
					return (
						<Icons
							key={project.keyName}
							title={project.keyName}
							activeDiv={activeDiv}
							set_activeDiv={set_activeDiv}
						/>
					);
				})}
			</div>
			{projects.map((project) => {
				return (
					<Project
						key={project.title}
						title={project.title}
						description={project.description}
						github={project.github}
					/>
				);
			})}
		</div>
	);
};

export default Portfolio;
