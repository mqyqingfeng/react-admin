import { createAction } from 'redux-actions';

// 登陆
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

let loginRequest = createAction(LOGIN_REQUEST);

export { loginRequest };
