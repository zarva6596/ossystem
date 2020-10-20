import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewProduct from './components/NewProduct';
import Header from './components/Header';
import Catalog from './components/Catalog';
import SiteBar from './components/SiteBar';

import './App.scss';

export const App = () => (
  <>
    <div
      className="newPage"
    >
      <Header />

      <SiteBar />

      <Switch>
        <Route
          path="/catalog"
        >
          <Catalog />
        </Route>

        <Route
          path="/addProduct"
        >
          <NewProduct />
        </Route>
      </Switch>
    </div>
  </>
);
