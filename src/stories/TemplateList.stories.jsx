import React from 'react';

import TemplateList from '../components/TemplateList';
import * as TemplateComponent from './Template.stories';

export default {
	component: TemplateList,
	title: 'TemplateList',
	decorators: [(story) => <div>{story()}</div>],
};

const Template = (args) => <TemplateList {...args} />;

export const Default = Template.bind({});
Default.args = {
	templates: [
		{
			...TemplateComponent.Default.args.template,
			id: '1',
			title: 'Random Task 1',
			date: new Date(),
			state: '',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '2',
			title: 'Important Task',
			date: new Date(),
			state: '',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '3',
			title: 'Somewhat Important',
			date: new Date(),
			state: '',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '4',
			title: 'Task 4',
			date: new Date(),
			state: '',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '5',
			title: 'Important Task 2',
			date: new Date(),
			state: '',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '6',
			title: 'Random Task 3',
			date: new Date(),
			state: '',
		},
	],
	loading: false,
};

export const DefaultRandom = Template.bind({});
DefaultRandom.args = {
	templates: [
		{
			...TemplateComponent.Default.args.template,
			id: '1',
			title: 'Random Task 1',
			date: new Date(),
			state: '',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '2',
			title: 'Important Task',
			date: new Date(),
			state: 'TASK_PINNED',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '3',
			title: 'Somewhat Important',
			date: new Date(),
			state: '',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '4',
			title: 'Task 4',
			date: new Date(),
			state: 'TASK_ARCHIVED',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '5',
			title: 'Important Task 2',
			date: new Date(),
			state: 'TASK_PINNED',
		},
		{
			...TemplateComponent.Default.args.template,
			id: '6',
			title: 'Random Task 3',
			date: new Date(),
			state: 'TASK_ARCHIVED',
		},
	],
	loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
	templates: [],
	loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
	templates: [],
	loading: false,
};
