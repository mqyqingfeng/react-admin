/*
* @Author: kevin
* @Date:   2016-12-19 14:47:59
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-19 14:52:36
* @Description:  登陆相关reducers示例
*/

'use strict';

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