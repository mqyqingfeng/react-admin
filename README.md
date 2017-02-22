# React-Base

React + ant-design 脚手架，专用作后台管理系统，功能齐全，细节完善，并且提供丰富的示例代码，可以直接上手和开发。

# 实现的功能

1. 热加载
2. ES6/7
3. Sass
4. 动态路由
5. Mock接口
6. 本地node服务器

# 更多特性

除了主流的技术选型之外，还提供了

1. 丰富的示例代码，并且提供sublime snippets，提高开发效率
    1. 组件的写法示例
    2. action 和 reducers的写法示例
    3. 使用fetch获取数据的写法示例
2. 半完成的后台界面，细节丰富，包括
    1. 登陆(可纯键盘操作登陆)
    2. 菜单栏(菜单栏会随路由变化而激活不同的菜单)
    3. 404页面
    4. 空白模板

## 技术选型

* react + redux + react-router + ant-design + Immutable + Fetch
* redux-action + redux-logger
* classnames + lodash
* sass
* webpack + react-hot-loader

## 使用方法

```bash
$ git clone git@github.com:mqyqingfeng/react-base.git
$ cd react-base
$ cnpm install                   # 需要安装cnpm

// 开发
$ npm start                     

// 等待编译完成,然后访问locahost:5000预览页面

// 编译
$ npm run build

// 会在dist目录下生成打包用的文件，可以访问locahost:3001预览页面

```


## 页面展示

登录页面（账号、密码随意）：

![登陆页](README/login.jpg)

主内容区：

![内容页](README/redux.png)

动态加载演示：

![动态路由加载](README/dynamicRoute.png)

404页面：

![404](README/404.png)
