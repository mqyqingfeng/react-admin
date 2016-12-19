import { combineReducers } from 'redux';

// import { routerReducer } from 'react-router-redux'

import nav from './nav';
import login from './login';

const app = combineReducers({
    nav,
    login
    // routing: routerReducer
});

export default app;