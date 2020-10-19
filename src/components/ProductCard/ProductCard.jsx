import React from 'react';
import PropTypes from 'prop-types';

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
    <div
      className="card__imgBlock"
    >
      <img
        className="card__image"
        src={imgUrl}
        alt={title}
      />
    </div>

    <div
      className="card__infoBlock"
    >
      <div className="card__heading">
        <h2
          className="card__header"
        >
          {title}
        </h2>
      </div>

      <div className="card__info">
        <p
          className="card__description"
        >
          {description}
        </p>
        <p
          className="card__id"
        >
          {id}
        </p>
      </div>

      <div className="card__priceBlock">
        <p
          className="card__price"
        >
          {`$${price}`}
        </p>
      </div>
    </div>
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
