import { ADD_TASKS_FROM_API, UPDATE_TASK_STATE } from './types';

export const getDataToRedux = (data) => ({
	type: ADD_TASKS_FROM_API,
	payload: data,
});

export const updateTaskState = (object) => ({
	type: UPDATE_TASK_STATE,
	payload: object,
});
