/*
* @Author: kevin
* @Date:   2016-12-19 14:33:48
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-19 15:52:30
* @Description: action示例
*/

'use strict';

import { createAction } from 'redux-actions';

export const Login_SUCCESS = 'Login_SUCCESS';

let loginSuccess = createAction(Login_SUCCESS);

export { loginSuccess };