import { combineReducers } from 'redux';

import nav from './nav';
import login from './login';

const app = combineReducers({
    nav,
    login
});

export default app;