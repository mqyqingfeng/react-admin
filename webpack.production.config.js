'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var src = path.join(__dirname, 'src'); // 开发源码目录

module.exports = {
    entry: {
      //业务代码
      bundle: './src/main',
      //第三方库
      vendor: ["react", "react-dom", "react-redux"]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: "[name]-[hash].min.js",
        publicPath: '/build/'
    },
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
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },{
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'url',
            query: {limit: 10240}
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin("bundle.css"),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
