import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

import { rootReducer } from './reducer';

import {
  addProduct,
  deleteProduct,
  removeProducts,
  changeUser,
} from './actions';

import { App } from '../App';

export const store = createStore(rootReducer);

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

export const WrappedApp = connect(putStateToProps, putActionsToProps)(App);
