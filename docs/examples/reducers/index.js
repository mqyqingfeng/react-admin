/*
* @Author: kevin
* @Date:   2016-12-19 14:47:22
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-19 14:51:43
* @Description: 合并多个reducer
*/

'use strict';

import { combineReducers } from 'redux';

import login from './login';

const reducers = combineReducers({
    login
});

export default reducers;
