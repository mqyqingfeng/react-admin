import React from 'react';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import createLogger from 'redux-logger';

import reducers from '../../redux/reducers/index.js';

import './global.scss';

import { notification } from 'antd';

import routers from 'ROUTES/routes';

const logger = createLogger();

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

notification.config({
    top: 45
});

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    {routers}
                </Router>
            </Provider>
        );
    }
}

export default Root;
