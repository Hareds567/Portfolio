import React, { useRef, SetStateAction, Dispatch, useEffect } from "react";
//Reducer

//Styles
import "./Icons.css";
type props = {
	title: string;
	activeProject: string;
	set_activeProject: Dispatch<SetStateAction<string>>;
};
const Icons: React.FC<props> = ({
	title,
	activeProject,
	set_activeProject,
}) => {
	const icon_container = useRef<HTMLDivElement>(null);

	const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!icon_container.current) return;
		if (title === activeProject) return;
		set_activeProject(title);
		icon_container.current.style.opacity = "0.85";
		icon_container.current.style.transform = "scale(1.4)";
		icon_container.current.style.color = "var(--primary-color)";
		icon_container.current.style.background = "var(--secondary-color)";
	};

	useEffect(() => {
		if (!icon_container.current) return;
		if (title !== activeProject) {
			icon_container.current.style.transitionDelay = "0s";
			icon_container.current.style.transitionDuration = "1s";
			icon_container.current.style.transform = "scale(1)";
			icon_container.current.style.opacity = "1";
			icon_container.current.style.background = "var(--primary-color)";
			icon_container.current.style.color = "var(--secondary-color)";
		}
	});

	useEffect(() => {
		if (!icon_container.current) return;
		if (title === activeProject) {
			icon_container.current.style.transitionDelay = "3s";
			icon_container.current.style.transitionDuration = "1s";
			icon_container.current.style.opacity = "0.85";
			icon_container.current.style.transform = "scale(1.4)";
		}
	}, []);

	return (
		<div
			className='icon-container'
			ref={icon_container}
			onClick={(event) => onClick(event)}>
			<span>
				<b>{title}</b>
			</span>
		</div>
	);
};

export default Icons;
