module.exports = {
    path: '/index/product/think',

    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('COMPONENTS/Content/Product/Think').default)
        })
    }
}
