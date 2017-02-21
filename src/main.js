import { AppContainer } from 'react-hot-loader';

import React from 'react';

import ReactDOM from 'react-dom';

import Provider from 'LAYOUTS/Provider';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <Provider />
    </AppContainer>,
    rootEl
);

if (module.hot) {

    module.hot.accept('LAYOUTS/Provider', () => {

        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('LAYOUTS/Provider').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );

    });

}
