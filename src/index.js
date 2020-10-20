import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { StylesProvider } from '@material-ui/core/styles';

import { store } from './store';
import { App } from './App';

ReactDOM.render(
  <Provider
    store={store}
  >
    <HashRouter basename="ossystem">
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
