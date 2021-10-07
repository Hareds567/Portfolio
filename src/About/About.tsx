import React from "react";
import "./About.css";
const About = () => {
	return (
		<div className='about-container' id='about'>
			<section className='main-content'>
				<header>
					<h1>Who Am I</h1>
				</header>
				<article>
					I am a tech enthusiast who resides in New York City. I aim to develop
					applications designed around users. My career started while learning
					about user-centered design. While reading “The Design of Everyday
					Things” by Don Norman, I found an interest in the ease of things and
					the philosophy of not make me think. Later, with a group of
					classmates, I ended working on an android application for Software
					Engineering. The team ended up developing an application that catches
					the attention of our professor. The application was the first fully
					functional application that met the requirements of our stakeholders.{" "}
				</article>
			</section>
			{/* <section className='secondary-content'>
				<header>
					<h1>What Can I offer?</h1>
				</header>
			</section> */}
		</div>
	);
};

export default About;
