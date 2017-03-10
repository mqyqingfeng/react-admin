var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var _ = require('lodash');

var config = require('./webpack.base.config.js');

 // 项目根目录
var rootPath = path.resolve(__dirname, '..');
 // 开发源码目录
var src = path.join(rootPath, 'src');

module.exports =  _.merge(config, {
    entry: {
      //业务代码
      bundle: './src/main',
      //第三方库
      vendor: ["react", "react-dom", "react-redux"]
    },
    output: {
        path: path.join(rootPath, 'dist'),
        filename: "[name]-[hash].min.js",
        publicPath: '/dist/',
        chunkFilename: '[name]-[hash].chunk.js'
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.jsx$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        },{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!postcss-loader!sass-loader"
            })
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!postcss-loader"
            })
        },{
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'url-loader',
            query: {limit: 10240}
        },{
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loader: "url-loader",
            query: {
                limit: 1024,
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin("bundle.css"),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
