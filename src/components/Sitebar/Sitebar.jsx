import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Typography, Button } from '@material-ui/core';

import './SiteBar.scss';

export const SiteBar = ({
  products,
  user,
  removeProducts,
}) => {
  const [right, setRight] = useState(user === 'admin' ? '-750px' : '-550px');

  useEffect(() => (
    setRight(user === 'admin' ? '-750px' : '-550px')
  ), [user]);

  const goods = products.length;
  const total = products.reduce((acc, product) => acc + +product.price, 0);
  const average = goods > 0 ? (total / goods).toFixed(2) : 0;

  return (
    <>
      <div className="mobileSiteBar">
        <Typography variant="h6">
          {`${goods} `}
          products in catalog.
        </Typography>
        <Typography variant="h6">
          Total price =
          {` $${total}`}
        </Typography>
        <Typography variant="h6">
          Average price =
          {` $${average}`}
        </Typography>

        <Button
          style={{
            display: `${user === 'admin' ? 'block' : 'none'}`,
            margin: '0 auto',
          }}
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => removeProducts()}
        >
          Delete all products
        </Button>
      </div>

      <div
        style={{
          right,
        }}
        className="siteBar"
        onMouseEnter={() => setRight(null)}
        onMouseLeave={() => setRight(user === 'admin' ? '-750px' : '-550px')}
      >
        <div className="siteBar__heading">
          <Typography
            variant="h4"
          >
            Info
          </Typography>
        </div>

        <div
          className="siteBar__info"
        >
          <div
            className="siteBar__item"
          >
            <Typography variant="h6">Quantity of goods:</Typography>
            <p className="siteBar__itemText">{goods}</p>
          </div>

          <div
            className="siteBar__item"
          >
            <Typography variant="h6">Total price:</Typography>
            <p className="siteBar__itemText">{`$${total}`}</p>
          </div>

          <div
            className="siteBar__item"
          >
            <Typography variant="h6">Average price:</Typography>
            <p className="siteBar__itemText">{`$${average}`}</p>
          </div>

          <Button
            style={{
              display: `${user === 'admin' ? 'block' : 'none'}`,
            }}
            variant="contained"
            color="secondary"
            type="button"
            className={user === 'admin'
              ? 'siteBar__button'
              : 'siteBar__button--none'}
            onClick={() => removeProducts()}
          >
            Delete all products
          </Button>
        </div>
      </div>
    </>
  );
};

SiteBar.propTypes = {
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
