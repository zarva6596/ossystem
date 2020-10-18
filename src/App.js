import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './App.scss';

import { NewProduct } from './components/NewProduct';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Sitebar } from './components/Sitebar';

export const App = ({
  products,
  user,
  changeUser,
  deleteProduct,
  removeProducts,
  addProduct,
}) => (
  <>
    <div
      className="newPage"
    >
      <Header
        user={user}
        changeUser={changeUser}
      />

      <Sitebar
        products={products}
        user={user}
        removeProducts={removeProducts}
      />

      <Route
        path="/catalog"
        render={() => (
          <Catalog
            products={products}
            user={user}
            deleteProduct={deleteProduct}
          />
        )}
      />

      <Route
        path="/addProduct"
        render={() => (
          <NewProduct
            addProduct={addProduct}
            products={products}
            user={user}
          />
        )}
      />
    </div>
  </>
);

App.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  user: PropTypes.string.isRequired,
  changeUser: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  removeProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};
