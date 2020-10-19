import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';

import { App } from './App';

import productsFromServer from './api/products.json';

const initialState = {
  products: productsFromServer,
  user: 'admin',
};

const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_USER = 'CHANGE_USER';
const ADD_PRODUCT = 'ADD_PRODUCT';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: action.value,
      };

    case DELETE_PRODUCT:

      return {
        ...state,
        products: [...state.products]
          .filter(product => product.id !== action.value),
      };

    case REMOVE_PRODUCTS:
      return {
        ...state,
        products: [],
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.value],
      };

    default:
      return { ...state };
  }
};

const store = createStore(rootReducer);

const changeUser = value => ({
  type: CHANGE_USER,
  value,
});

const removeProducts = () => ({
  type: REMOVE_PRODUCTS,
});

const deleteProduct = value => ({
  type: DELETE_PRODUCT,
  value,
});

const addProduct = value => ({
  type: ADD_PRODUCT,
  value,
});

const putStateToProps = state => ({
  products: state.products,
  user: state.user,
});

const putActionsToProps = dispatch => ({
  addProduct: bindActionCreators(addProduct, dispatch),
  deleteProduct: bindActionCreators(deleteProduct, dispatch),
  removeProducts: bindActionCreators(removeProducts, dispatch),
  changeUser: bindActionCreators(changeUser, dispatch),
});

const WrappedApp = connect(putStateToProps, putActionsToProps)(App);

ReactDOM.render(
  <Provider
    store={store}
  >
    <HashRouter>
      <WrappedApp />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
