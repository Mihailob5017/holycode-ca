import './App.css';

// Redux
import { store } from './lib/redux/store';
import { Provider } from 'react-redux';

// Components
import Homepage from './pages/Homepage';

// Code
function App() {
	return (
		<Provider store={store}>
			<Homepage />
		</Provider>
	);
}

export default App;
