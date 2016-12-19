/*
* @Author: MiaoQingyu
* @Date:   2016-10-25 15:26:41
* @Last Modified by:   kevin
* @Last Modified time: 2016-11-16 14:47:24
*/

module.exports = {
    path: '/login',
    getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
            cb(null, require('COMPONENTS/Login/Login.js').default)
        });
    }
}
