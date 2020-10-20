import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { Typography, Button, Box } from '@material-ui/core';

import ProductCard from '../ProductCard';

import './Catalog.scss';

const Catalog = ({
  products,
}) => (
  <>
    {products.length === 0
      ? (
        <Box
          className="catalog__error"
        >
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom
          >
            Sorry, but the directory is empty...
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            gutterBottom
          >
            {`You can add a new product `}
            <NavLink
              to="/addProduct"
            >
              <Button
                variant="contained"
                color="primary"
              >
                here
              </Button>
            </NavLink>
          </Typography>
        </Box>
      )
      : (
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
              />
            ))}
          </div>
        </div>
      )
    }
  </>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const putStateToProps = state => ({
  products: state.products,
});

export default connect(putStateToProps, null)(Catalog);
