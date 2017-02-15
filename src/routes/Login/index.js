/*
* @Author: MiaoQingyu
* @Date:   2016-10-25 15:26:41
* @Last Modified by:   mqyqingfeng
* @Last Modified time: 2017-02-08 17:09:30
*/

module.exports = {
    path: '/login',
    getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
            cb(null, require('LAYOUTS/Container/Login').default)
        });
    }
}
