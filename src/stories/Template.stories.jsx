import React from 'react';

import TemplateComponent from '../components/Template';

export default {
	component: TemplateComponent,
	title: 'Template',
};

const Template = (args) => <TemplateComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
	template: {
		id: 'EDCySL3sLJkkWT4CajCR',
		title: 'Test Template',
		date: new Date(2021, 0, 1, 9, 0),
		state: '',
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	template: {
		id: 'EDCySL3sLJkkWT4CajCR',
		title: 'Test Template',
		date: new Date(2021, 0, 1, 9, 0),
		state: 'TASK_PINNED',
	},
};

export const Archived = Template.bind({});
Archived.args = {
	template: {
		id: 'EDCySL3sLJkkWT4CajCR',
		title: 'Test Template',
		date: new Date(2021, 0, 1, 9, 0),
		state: 'TASK_ARCHIVED',
	},
};
