import React from 'react';
import { Provider } from "react-redux";
import { render } from 'react-dom';
import App from './app/app';
import { configureStore } from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';

let rootElement = document.getElementById('app');
const store = configureStore();

if(rootElement) {
    render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>,
        document.getElementById('app')
    );
}
