# webpack升级指南

1. 安装webpack2

```js

npm install --save-dev webpack

```


2. 安装extract-text-webpack-plugin2

```js

npm install --save-dev extract-text-webpack-plugin

```

3. 修改.babelrc

```js

// before
{
  "presets": ["es2015", "stage-0", "react"],
}

// after
{
  "presets": [["es2015", { "modules": false }], "stage-0", "react"],
}

```

4. 修改webpack配置文件loaders为rules

```js
 // before
modules: {
  loaders: {...}
}

// after
modules: {
  rules: {...}
}
```

5. 删除 webpack.optimize.OccurenceOrderPlugin 插件

6.修改preloader使用方式
```js
// before
module: {
     preLoaders: [{
          test: /\.js$/,
          loader: 'eslint',
          exclude: /node_modules/
     }],
     loaders: [{
         test: /\.jsx?$/,
         loaders: ['babel-loader'],
         exclude: /node_modules/
     }]
 }

// after
module: {
    rules: [{
        enforce: "pre",
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
    }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }]
}
```

7. 所有loader名称不简写

8. 修改resolver的extensions 为 [".js", ".json", ".jsx", ".css"]

9. 修改extract-text-webpack-plugin插件的使用
```js
// before
 {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
}

// after
{
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!postcss-loader!sass-loader"
    })
}
```

10. 删除new webpack.optimize.DedupePlugin(),
