var path = require('path');
var rootPath = path.resolve(__dirname, '..'); // 项目根目录
var src = path.join(rootPath, 'src'); // 开发源码目录

module.exports = {
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
              COMPONENTS: path.join(src, 'components'),
              LAYOUTS: path.join(src, 'layouts'),
              ROUTES: path.join(src, 'routes'),
              UTIL: path.join(src, 'util'),
              ACTIONS: path.join(src, 'redux/actions'),
              WITH: path.join(src, 'with')
        }
    }
};