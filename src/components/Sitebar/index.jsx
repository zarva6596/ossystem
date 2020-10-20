import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Typography, Button } from '@material-ui/core';

import { removeProducts } from '../../store/actions';

import './SiteBar.scss';

const SiteBar = ({
  products,
  user,
  removeAllProducts,
}) => {
  const position = `${user === 'admin' ? '-750px' : '-550px'}`;
  const [right, setRight] = useState(position);

  useEffect(() => (
    setRight(position)
  ), [user]);

  const goods = products.length;
  const total = products.reduce((acc, product) => acc + +product.price, 0);
  const average = goods > 0 ? (total / goods).toFixed(2) : 0;

  const showButton = {
    display: user === 'admin'
      ? 'inline-block'
      : 'none',
  };

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
          style={showButton}
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
        onMouseLeave={() => setRight(position)}
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
            style={showButton}
            variant="contained"
            color="secondary"
            type="button"
            onClick={() => removeAllProducts()}
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
  removeAllProducts: PropTypes.func.isRequired,
};

const putStateToProps = state => ({
  products: state.products,
  user: state.user,
});

const putActionsToProps = dispatch => ({
  removeAllProducts: bindActionCreators(removeProducts, dispatch),
});

export default connect(putStateToProps, putActionsToProps)(SiteBar);
