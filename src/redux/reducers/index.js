import { combineReducers } from 'redux';

import selectProduct from './selectProduct';

const app = combineReducers({
    selectProduct
});

export default app;