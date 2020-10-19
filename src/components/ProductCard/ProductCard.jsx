import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography } from '@material-ui/core';

import './ProductCard.scss';

export const ProductCard = ({
  id,
  title,
  description,
  imgUrl,
  price,
  user,
  deleteProduct,
}) => (
  <div
    className="card"
  >
    <button
      type="button"
      className={user === 'admin'
        ? 'card__removeProduct'
        : 'card__removeProduct--none'}
      onClick={() => deleteProduct(id)}
    >
      <img src="images/x.png" alt="remove button" />
    </button>
    <Box
      style={{
        textAlign: 'center',
        height: '250px',
        width: '100%',
        padding: '10px',
        overflow: 'hidden',
      }}
    >
      <img
        className="card__image"
        src={imgUrl}
        alt={title}
      />
    </Box>

    <Box
      style={{
        backgroundColor: 'rgba(208, 255, 255, 0.788)',
        padding: '0 10px',
      }}
    >
      <Box
        style={{
          padding: '10px 0',
        }}
      >
        <Typography
          variant="h4"
        >
          {title}
        </Typography>
      </Box>

      <Box
        style={{
          padding: '10px 0',
        }}
      >
        <Typography
          variant="overline"
        >
          id:
          {id}
        </Typography>
      </Box>

      <Box
        style={{
          textAlign: 'justify',
          paddingLeft: '30px',
          height: '100px',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="body1"
        >
          {description}
        </Typography>
      </Box>

      <Box
        style={{
          textAlign: 'right',
          padding: '30px',
        }}
      >
        <Typography
          variant="h5"
        >
          {`$${price}`}
        </Typography>
      </Box>
    </Box>
  </div>
);

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
