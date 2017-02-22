var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var fs = require('fs');
var _ = require('lodash');
var bodyParser = require('body-parser');

var config = require('./webpack.dev.config');

var rootPath = path.resolve(__dirname, '..');

var app = express();

var compiler = webpack(config);

// 解决跨域
app.all('*', function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "text/html");
    next();

})

app.use(bodyParser.urlencoded({ extended: false }))

const devMiddlewareResult = devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
})

app.use(hotMiddleware(compiler));

app.use(devMiddlewareResult);

app.use(express.static(rootPath));

// 解决在开发模式下因为使用React-hot-loader导致的html-webpack-plugin不编译html文件导致预览失败的问题
app.get('*', function(req, res) {

    const htmlBuffer = devMiddlewareResult.fileSystem.readFileSync(`${config.output.path}/index.html`)

    res.send(htmlBuffer.toString())

});

// Mock配置
var mockConfigWrap = require('../mockConfig.js');

var mockConfig = mockConfigWrap.mockConfig;

for (var i = 0; i < mockConfig.length; i++) {

    var url = mockConfig[i].url;

    var position = mockConfig[i].position;

    var resData = mockConfig[i].response[position]

    if (mockConfig[i].type == 'post') {

        app.post(url, function(req, res, next) {
            var data = _.find(mockConfig, function(o) { return o.url == req.route.path; })
            var position = data.position;
            res.json(data.response[position]);
        })

    } else if (mockConfig[i].type == 'get') {

        app.get(url, function(req, res, next) {
            var data = _.find(mockConfig, function(o) { return o.url == req.route.path; })
            var position = data.position;
            res.json(data.response[position]);
        })

    }
}

app.listen(5000, function(err) {

    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:5000/, waiting for compile');

});
