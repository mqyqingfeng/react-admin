module.exports = {
    path: '/index/product/lenovo',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/ProductInfo')
            ])
        })
    },

    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('COMPONENTS/Lenovo/Lenovo').default)
        })
    }
}
