module.exports = {
    path: '/index/product/think',

    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('COMPONENTS/Think/Think').default)
        })
    }
}
