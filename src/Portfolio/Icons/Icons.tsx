import React, {
	useRef,
	SetStateAction,
	Dispatch,
	useEffect,
	useState,
} from "react";
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
	const [animation, setAnimation] = useState(10);

	const onClick = () => {
		setAnimation(1);
		set_activeProject(title);
	};
	useEffect(() => {
		if (activeProject !== title && (animation === 1 || animation === 2)) {
			setAnimation(0);
		}
	});
	useEffect(() => {
		if (activeProject === title) {
			setAnimation(2);
		}
	}, []);
	useEffect(() => {
		console.log(animation);
	}, [animation]);
	return (
		<div
			className='icon-container'
			ref={icon_container}
			onClick={onClick}
			data-animation={animation}>
			<span>
				<h3>{title}</h3>
			</span>
		</div>
	);
};

export default Icons;
