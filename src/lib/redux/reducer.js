import { ADD_TASKS_FROM_API, UPDATE_TASK_STATE } from './types';

const initalState = {
	templates: [],
};

const updateTaskHelper = (allTemplates = [], payloadObj) => {
	const templateIndex = allTemplates.findIndex(
		(template) => template.id === payloadObj.id
	);
	allTemplates[templateIndex].state = payloadObj.newTaskState;
	return [...allTemplates];
};

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case ADD_TASKS_FROM_API:
			return {
				...state,
				templates: action.payload,
			};
		case UPDATE_TASK_STATE:
			return {
				...state,
				templates: updateTaskHelper(state.templates, action.payload),
			};
		default:
			return state;
	}
};

export default reducer;
