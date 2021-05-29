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
		icon_container.current.style.transform = "scale(1.25)";
		icon_container.current.style.opacity = "0.5";
	};

	useEffect(() => {
		if (!icon_container.current) return;
		if (title !== activeProject) {
			icon_container.current.style.transform = "scale(1)";
			icon_container.current.style.opacity = "1";
		}
	});
	useEffect(() => {
		if (!icon_container.current) return;
		if (title === activeProject) {
			icon_container.current.style.transform = "scale(1.25)";
			icon_container.current.style.opacity = "0.5";
		}
	}, []);

	return (
		<div
			className='icon-container'
			ref={icon_container}
			onClick={(event) => onClick(event)}>
			<span>{title}</span>
		</div>
	);
};

export default Icons;
