import React from 'react';
import PropTypes from 'prop-types';

import './Catalog.scss';
import { ProductCard } from '../ProductCard';

export const Catalog = ({
  products,
  user,
  removeProducts,
  deleteProduct,
}) => (
  <div
    className="catalog"
  >
    <div
      className="catalog__products"
    >
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          user={user}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  </div>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  user: PropTypes.string.isRequired,
  removeProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
