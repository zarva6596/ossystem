import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Sitebar.scss';

export const Sitebar = ({
  products,
  user,
  removeProducts,
}) => {
  const [right, setRight] = useState(user === 'admin' ? '-800px' : '-600px');

  useEffect(() => (
    setRight(user === 'admin' ? '-800px' : '-600px')
  ), [user]);

  const goods = products.length;
  const total = products.reduce((acc, product) => acc + +product.price, 0);
  const average = goods > 0 ? (total / goods).toFixed(2) : 0;

  return (
    <div
      style={{
        right,
      }}
      className="sitebar"
      onMouseEnter={() => setRight(null)}
      onMouseLeave={() => setRight(user === 'admin' ? '-800px' : '-600px')}
    >
      <div className="sitebar__heading">
        <h1>Info</h1>
      </div>

      <div
        className="sitebar__info"
      >
        <div
          className="sitebar__item"
        >
          <h3 className="sitebar__itemHeading">Quantity of goods:</h3>
          <p className="sitebar__itemText">{goods}</p>
        </div>

        <div
          className="sitebar__item"
        >
          <h3 className="sitebar__itemHeading">Total price:</h3>
          <p className="sitebar__itemText">{`$${total}`}</p>
        </div>

        <div
          className="sitebar__item"
        >
          <h3 className="sitebar__itemHeading">Average price:</h3>
          <p className="sitebar__itemText">{`$${average}`}</p>
        </div>

        <button
          type="button"
          className={user === 'admin'
            ? 'sitebar__button'
            : 'sitebar__button--none'}
          onClick={() => removeProducts()}
        >
          Delete all products
        </button>
      </div>
    </div>
  );
};

Sitebar.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  user: PropTypes.string.isRequired,
  removeProducts: PropTypes.func.isRequired,
};
