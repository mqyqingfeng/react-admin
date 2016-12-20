/*
* @Author: kevin
* @Date:   2016-12-20 16:11:32
* @Last Modified by:   kevin
* @Last Modified time: 2016-12-20 17:11:17
* @Description: main.js 入口文件
*/

import { AppContainer } from 'react-hot-loader';

import React from 'react';

import ReactDOM from 'react-dom';

import Provider from 'CONTAINER/Provider';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <Provider />
    </AppContainer>,
    rootEl
);

if (module.hot) {

    module.hot.accept('CONTAINER/Provider', () => {

        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('CONTAINER/Provider').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );

    });

}
