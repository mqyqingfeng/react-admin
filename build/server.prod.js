var path = require('path');
var webpack = require('webpack');
var express = require('express');
var _ = require('lodash');

var config = require('./webpack.prod.config');

var app = express();

var compiler = webpack(config);

var rootPath = path.resolve(__dirname, '..');

// 这句必须在解决跨域问题之前，否则会导致css文件加载但样式无效的问题
app.use(express.static(rootPath))

app.all('*',function(req,res,next){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "text/html");
    next();
})

app.get('*', function (req, res) {
  res.sendFile(path.join(rootPath, 'dist/index.html'));
});

//Mock配置
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

app.listen(3001, function (err) {

  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3001/');

});
