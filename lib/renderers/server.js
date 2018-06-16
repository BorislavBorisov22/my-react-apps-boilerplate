
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import configureStore from './../store/configureStore';
import initialState from '../reducers/initialState';
import { Provider} from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import App from './../components/App';

const store = configureStore(initialState);

const serverRenderer = async (url) => {
    // const resp = await axios.get(`http://${config.host}:${config.port}/data`);

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <Provider store={store}>
                <Router location={url} context={{}}>
                    <App />
                </Router>
            </Provider>
        ),
        initialData: {} // setup real initial data for the app when data format is known
    };
};

export default serverRenderer;