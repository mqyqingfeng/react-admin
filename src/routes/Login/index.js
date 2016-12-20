/*
* @Author: MiaoQingyu
* @Date:   2016-10-25 15:26:41
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-20 16:45:05
*/

module.exports = {
    path: '/login',
    getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
            cb(null, require('CONTAINER/Container/Login').default)
        });
    }
}
