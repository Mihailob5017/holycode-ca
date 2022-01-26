import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';
import Homepage from '../pages/Homepage';

export default {
	title: 'Homepage',
	component: Homepage,
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <Homepage {...args} />;

export const Default = Template.bind({});
