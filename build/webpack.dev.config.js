var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./webpack.base.config.js');

var _ = require('lodash');

 // 项目根目录
var rootPath = path.resolve(__dirname, '..');
 // 开发源码目录
var src = path.join(rootPath, 'src');

module.exports = _.merge(config, {
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/main'
    ],
    output: {
        path: path.join(rootPath, 'src'),
        filename: 'bundle.js',
        publicPath: '/static/',
        chunkFilename: '[name]-[hash].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ["style", "css-loader", "postcss", "sass"]
        }, {
            test: /\.css$/,
            loaders: ["style", "css-loader", "postcss"]
        },{
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'url',
            query: {limit: 10240}
        },{
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loader: "url-loader",
            query: {
                limit: 1024
            }
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
});

