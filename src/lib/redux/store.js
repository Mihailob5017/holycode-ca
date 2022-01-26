import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const middleware = [];

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);
