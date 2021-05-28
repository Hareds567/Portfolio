type Actions = {
	type: "setActiveProject";
	data: HTMLDivElement;
};
type State = {
	data: HTMLDivElement | undefined;
};

const IconReducer = (state: State, action: Actions) => {
	switch (action.type) {
		case "setActiveProject":
			return (state.data = action.data);
		default:
			return state;
	}
};

export default IconReducer;
