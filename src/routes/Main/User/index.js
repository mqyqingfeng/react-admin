module.exports = {
  path: '/index/user',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('COMPONENTS/Content/User').default)
    })
  }
}
