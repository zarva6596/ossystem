import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';

import { WrappedApp, store } from './store';

ReactDOM.render(
  <Provider
    store={store}
  >
    <HashRouter basename="ossystem">
      <WrappedApp />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
