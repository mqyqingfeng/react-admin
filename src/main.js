import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'COMPONENTS/Provider/Provider';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('COMPONENTS/Provider/Provider', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('COMPONENTS/Provider/Provider').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}