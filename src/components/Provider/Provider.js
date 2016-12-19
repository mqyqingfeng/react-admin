import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

import createLogger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import reducers from '../../redux/reducers/index.js';

// import DevTools from '../../devtools/DevTools';

import { persistState } from 'redux-devtools';

import '../../stubs/COURSES';

import 'antd/dist/antd.css';
import './global.scss';

import loginSaga from '../../sagas/login';

import { notification } from 'antd';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

// const enhancer = compose(
//   applyMiddleware(sagaMiddleware, logger),
//   DevTools.instrument(),
//   persistState(
//     window.location.href.match(
//       /[?&]debug_session=([^&#]+)\b/
//     )
//   )
// );

// function configureStore(initialState) {
//   const store = createStore(reducers, initialState, enhancer);

//   if (module.hot) {
//     module.hot.accept('../../redux/reducers/index.js', () =>
//       store.replaceReducer(require('../../redux/reducers/index.js').default)
//     );
//   }

//   return store;
// }

// let store = configureStore();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
);

notification.config({
  top: 45
});

// const history = syncHistoryWithStore(browserHistory, store)

// history.listen(location => console.log(location.pathname))

sagaMiddleware.run(loginSaga)

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('COMPONENTS/Container/Container').default,
        indexRoute: {
            component: require('COMPONENTS/Login/Login').default
        },
        childRoutes: [
            require('ROUTES/Login'),
            require('ROUTES/Main')
        ]
    }]
}

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={rootRoute} />
            </Provider>
        );
    }
}

export default Root;
