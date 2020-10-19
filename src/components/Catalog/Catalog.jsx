import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { Typography, Button, Box } from '@material-ui/core';

import './Catalog.scss';
import { ProductCard } from '../ProductCard';

export const Catalog = ({
  products,
  user,
  deleteProduct,
}) => (
  <>
    {products.length === 0
      ? (
        <Box
          style={{
            textAlign: 'center',
            padding: '50px 0',
          }}
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
            You can add a new product
            <NavLink
              to="/addProduct"
            >
              <Button
                style={{
                  marginLeft: '20px',
                }}
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
                user={user}
                deleteProduct={deleteProduct}
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
  user: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
