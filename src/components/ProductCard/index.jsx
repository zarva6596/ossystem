import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@material-ui/core';

import './ProductCard.scss';

import { deleteProduct } from '../../store/actions';

const ProductCard = ({
  id,
  title,
  description,
  imgUrl,
  price,
  user,
  delProduct,
}) => (
  <div
    className="card"
  >
    <button
      type="button"
      className={user === 'admin'
        ? 'card__removeProduct'
        : 'card__removeProduct--none'}
      onClick={() => delProduct(id)}
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
  delProduct: PropTypes.func.isRequired,
};

const putStateToProps = state => ({
  user: state.user,
});

const putActionsToProps = dispatch => ({
  delProduct: bindActionCreators(deleteProduct, dispatch),
});

export default connect(putStateToProps, putActionsToProps)(ProductCard);
