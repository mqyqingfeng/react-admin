/*
 * @Author: MiaoQingyu
 * @Date:   2016-10-27 14:00:24
 * @Last Modified by:   kevin
 * @Last Modified time: 2016-11-22 16:52:17
 */

import { browserHistory } from 'react-router';

module.exports = {

    path: '/index',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./User'),
                require('./Product')
            ])
        })
    },
    onEnter() {
        if (!localStorage.getItem('userData')) {
            browserHistory.push('/login');
        }
    },
    indexRoute: {
        component: require('COMPONENTS/Main/Main').default
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('COMPONENTS/App/App').default)
        })
    }

}
