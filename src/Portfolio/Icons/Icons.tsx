import React, { useRef, SetStateAction, Dispatch, useEffect } from "react";
//Reducer

//Styles
import "./Icons.css";
type props = {
	title: string;
	activeDiv: HTMLDivElement | undefined;
	set_activeDiv: Dispatch<SetStateAction<HTMLDivElement | undefined>>;
};
const Icons: React.FC<props> = ({ title, activeDiv, set_activeDiv }) => {
	const icon_container = useRef<HTMLDivElement>(null);
	const test = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!icon_container.current) return;
		if (icon_container.current === activeDiv) return;
		set_activeDiv(icon_container.current);
		icon_container.current.style.transform = "scale(1.2)";
	};

	useEffect(() => {
		if (!icon_container.current) return;
		if (activeDiv !== icon_container.current) {
			icon_container.current.style.transform = "scale(1)";
		}
	});

	return (
		<div
			className='icon-container'
			ref={icon_container}
			onClick={(event) => test(event)}>
			<span>{title}</span>
		</div>
	);
};

export default Icons;
