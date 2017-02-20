import React from 'react';

import { Route, IndexRoute } from 'react-router';

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

export default (
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
);