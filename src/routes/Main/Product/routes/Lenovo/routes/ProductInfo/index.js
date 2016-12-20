module.exports = {
    path: '/index/product/lenovo/:productId',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('COMPONENTS/Content/Product/Lenovo/ProductInfo').default)
        })
    }
}
