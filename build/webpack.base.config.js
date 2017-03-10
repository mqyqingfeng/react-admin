var path = require('path');

 // 项目根目录
var rootPath = path.resolve(__dirname, '..');
 // 开发源码目录
var src = path.join(rootPath, 'src');

module.exports = {
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
              COMPONENTS: path.join(src, 'components'),
              LAYOUTS: path.join(src, 'layouts'),
              ROUTES: path.join(src, 'routes'),
              UTIL: path.join(src, 'util'),
              ACTIONS: path.join(src, 'redux/actions'),
              WITH: path.join(src, 'with'),
              STATIC: path.join(src, 'static')
        }
    }
};