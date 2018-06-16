import ReactDOM from 'react-dom';
import App from './../components/App';
import React from 'react';
import configureStore from './../store/configureStore';
import initialState from '../reducers/initialState';
import { Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore(initialState);

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);