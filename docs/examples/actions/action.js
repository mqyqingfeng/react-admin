import { createAction } from 'redux-actions';

export const Login_SUCCESS = 'Login_SUCCESS';

let loginSuccess = createAction(Login_SUCCESS);

export { loginSuccess };