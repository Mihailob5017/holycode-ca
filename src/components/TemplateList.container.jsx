import React, { useState, useEffect } from 'react';

// API
import { getData } from '../lib/api/api';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getDataToRedux, updateTaskState } from '../lib/redux/action';

// Components
import TemplateList from './TemplateList';

// Code
const TemplateListContainer = () => {
	const templates = useSelector((state) => state.templates);
	const dispatch = useDispatch();

	const [selectedTab, setSelectedTab] = useState('ALL');
	const [loading, setLoading] = useState(true);

	const pinTask = (value) => {
		dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
	};
	const archiveTask = (value) => {
		dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
	};
	const resetTaskState = (value) => {
		dispatch(updateTaskState({ id: value, newTaskState: '' }));
	};

	const getTasksFromAPI = () => {
		getData().then((tasks) => {
			dispatch(
				getDataToRedux(
					[...tasks].map((el) => ({
						...el,
						state: el.state ? el.state : '',
					}))
				)
			);
			setLoading(false);
		});
	};
	useEffect(() => {
		getTasksFromAPI();
	}, []);

	return (
		<TemplateList
			selectedTab={selectedTab}
			loading={loading}
			templates={templates}
			onChangeTab={(newTabValue) => setSelectedTab(newTabValue)}
			onPinTask={(task) => pinTask(task)}
			onArchiveTask={(task) => archiveTask(task)}
			onResetTask={(task) => resetTaskState(task)}
		/>
	);
};

export default TemplateListContainer;
