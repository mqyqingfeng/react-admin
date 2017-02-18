/*
* @Author: kevin
* @Date:   2016-12-20 16:19:30
* @Last Modified by:   mqyqingfeng
* @Last Modified time: 2017-02-17 16:45:30
* @Description: Redux的包裹组件和React-router的使用
*/

import React from 'react';

import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import createLogger from 'redux-logger';

import reducers from '../../redux/reducers/index.js';

import './global.scss';

import { notification } from 'antd';

const logger = createLogger();

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

notification.config({
    top: 45
});

import Container from 'LAYOUTS/Container';
import Login from 'LAYOUTS/Container/Login';

const Main = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('LAYOUTS/Container/Main').default)
    },'main')
}

const User = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/User').default)
    },'user')
}

const Product = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product').default)
    },'product')
}

const Think = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product/Think').default)
    },'think')
}

const Lenovo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product/Lenovo').default)
    },'lenovo')
}

const ProductInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product/Lenovo/ProductInfo').default)
    },'productInfo')
}

const authRequired = (location, cb) => {
    if (!localStorage.getItem('userData')) {
        browserHistory.push('/login');
    }
}

const NotFound = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('LAYOUTS/Container/NotFound').default)
    },'notfound')
}

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/index" onEnter={authRequired} getComponent={Main} >
                            <IndexRoute getComponent={User} />
                            <Route path="/index/user" getComponent={User} />
                            <Route path="/index/product" getComponent={Product}>
                                <Route path="/index/product/think" getComponent={Think} />
                                <Route path="/index/product/lenovo" getComponent={Lenovo} >
                                    <Route path="/index/product/lenovo/:productId" getComponent={ProductInfo} />
                                </Route>
                            </Route>
                        </Route>
                        <Route path="*" getComponent={NotFound} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Root;
