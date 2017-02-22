// 选择的产品值
const initialState = {
    productValue: null
};

function login(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_PRODUCT':
            return Object.assign({}, state, {
                productValue: action.payload
            })
        default:
            return state
    }
}

export default login;