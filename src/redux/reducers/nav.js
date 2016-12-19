// 菜单栏点击
import { NAV_CLICK } from '../actions/menu.js'

const initialState = {
    navText: 'product' //切换标签页
};

function nav(state = initialState, action) {
    switch (action.type) {
        case NAV_CLICK:
            return Object.assign({}, state, {
                navText: action.payload
            })
        default:
            return state
    }
}

export default nav