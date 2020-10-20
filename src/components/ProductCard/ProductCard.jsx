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
      className="card__imageBox"
    >
      <img
        className="card__image"
        src={imgUrl}
        alt={title}
      />
    </Box>

    <Box
      className="card__infoBox infoBox"
    >
      <Box
        className="infoBox__heading"
      >
        <Typography
          variant="h4"
        >
          {title}
        </Typography>
      </Box>

      <Box
        className="infoBox__id"
      >
        <Typography
          variant="overline"
        >
          id:
          {id}
        </Typography>
      </Box>

      <Box
        className="infoBox__description"
      >
        <Typography
          variant="body1"
        >
          {description}
        </Typography>
      </Box>

      <Box
        className="infoBox__price"
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
