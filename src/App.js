import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { NewProduct } from './components/NewProduct';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { SiteBar } from './components/SiteBar';

import './App.scss';

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

      <SiteBar
        products={products}
        user={user}
        removeProducts={removeProducts}
      />

      <Switch>
        <Route
          path="/catalog"
        >
          <Catalog
            products={products}
            user={user}
            deleteProduct={deleteProduct}
          />
        </Route>

        <Route
          path="/addProduct"
        >
          <NewProduct
            addProduct={addProduct}
            products={products}
            user={user}
          />
        </Route>
      </Switch>
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
