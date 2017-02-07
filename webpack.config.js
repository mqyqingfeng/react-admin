var path = require('path');
var webpack = require('webpack');

var src = path.join(__dirname, 'src'); // 开发源码目录

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/main'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
              COMPONENTS: path.join(src, 'components'),
              CONTAINER: path.join(src, 'container'),
              ROUTES: path.join(src, 'routes'),
              UTIL: path.join(src, 'util'),
              ACTIONS: path.join(src, 'redux/actions')
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.css$/,
            loaders: ["style", "css"]
        },{
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'url',
            query: {limit: 10240}
        }]
    }

};
