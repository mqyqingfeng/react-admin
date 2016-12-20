module.exports = {
    path: '/index/product',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Think'),
                require('./routes/Lenovo')
            ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('COMPONENTS/Content/Product').default)
        })
    }
}
