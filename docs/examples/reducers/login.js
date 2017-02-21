const initialState = {
    //切换标签页
    userData: null
};

function login(state = initialState, action) {
    switch (action.type) {
        case 'Login_SUCCESS':
            return Object.assign({}, state, {
                userData: action.payload
            })
        default:
            return state
    }
}

export default login;