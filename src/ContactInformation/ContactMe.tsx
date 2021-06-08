import React from "react";
//Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import copy from "copy-to-clipboard";
//Types
import { SocialMedia } from "../Types/Types";
//Styles
import "./ContactMe.css";

const ContactMe = () => {
	const platform_clipboard = React.useRef<HTMLDivElement>(null);
	const [isCopied, set_isCopied] = React.useState(false);

	const copy_to_clipboard = () => {
		copy("justincabrera854@gmail.com");
		set_hoverDetailsDisplay("block");
		set_isCopied(true);
		setTimeout(() => {
			set_hoverDetailsDisplay("none");
			set_isCopied(false);
		}, 5000);
	};
	const set_hoverDetailsDisplay = (display: string) => {
		if (platform_clipboard.current === null) return;
		if (display === "none")
			platform_clipboard.current.style.removeProperty(display);
		platform_clipboard.current.style.display = display;
	};
	const goTo = (link: string) => {
		window.open(link);
	};

	React.useEffect(() => {
		platform_clipboard.current?.addEventListener("mouseover", (e) => {
			console.log(platform_clipboard.current?.style.display);
		});
	});

	return (
		<div className='contact-container'>
			<header>
				<h1>You can find me in the following platforms</h1>
			</header>
			<ul>
				<li
					className='linkedin'
					onClick={() =>
						goTo("https://www.linkedin.com/in/justin-cabrera-a725001a2/")
					}>
					<div className='platform-data'>
						<FontAwesomeIcon
							icon={faLinkedinIn}
							size='2x'
							className='icon-contact'
						/>{" "}
						<span>Justin Cabrera</span>
					</div>
				</li>
				<li
					className='twitter'
					onClick={() => goTo("https://twitter.com/Hareds_")}>
					<div className='platform-data'>
						<FontAwesomeIcon
							icon={faTwitter}
							size='2x'
							className='icon-contact'
						/>
						<span>Hareds_</span>
					</div>
				</li>
				<li className='gmail' id='gmail'>
					<div className='platform-data' onClick={copy_to_clipboard}>
						<FontAwesomeIcon
							icon={faEnvelope}
							size='2x'
							className='icon-contact'
						/>
						<span>justincabrera854@gmail.com</span>
					</div>
					<div
						className={
							!isCopied ? "platform-clipboard-off" : "platform-clipboard-on"
						}
						ref={platform_clipboard}>
						{!isCopied ? "Copy to Clipboard" : "Copied to clipboard"}
					</div>
				</li>
			</ul>
		</div>
	);
};

export default ContactMe;
