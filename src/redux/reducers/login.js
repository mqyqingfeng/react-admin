// 登陆
const initialState = {
    loginData: null //切换标签页
};

function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                loginData: action.user
            })
        case 'LOGIN_FAILED':
        	return state;
        default:
            return state
    }
}

export default login;