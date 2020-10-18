import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import { NewProduct } from './components/NewProduct';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Sitebar } from './components/Sitebar';

import productsFromServer from './api/products.json';

export const App = () => {
  const [products, handleProducts] = useState(productsFromServer);
  const [user, setUser] = useState('user');

  const addProduct = (product) => {
    handleProducts([...products, product]);
  };

  const removeProducts = () => handleProducts([]);

  const deleteProduct = id => handleProducts([...products]
    .filter(product => product.id !== id));

  return (
    <>
      <div
        className="newPage"
      >
        <Header
          user={user}
          setUser={setUser}
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
              removeProducts={removeProducts}
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
};
