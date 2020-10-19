import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewProduct.scss';

export const NewProduct = ({ addProduct, products, user }) => {
  const [product, createProduct] = useState({
    id: '',
    title: '',
    description: '',
    imgUrl: '',
    price: '',
    photo: '',
  });

  const { title, description, imgUrl, price } = product;

  const id = products.length;

  const hendleChange = (event) => {
    const { name, value } = event.target;

    createProduct({
      ...product,
      [name]: value,
      id,
    });
  };

  const handlePhoto = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      createProduct({
        ...product,
        photo: file,
        imgUrl: reader.result,
        id,
      });
    };

    reader.readAsDataURL(file);
  };

  const newProduct = (event) => {
    event.preventDefault();

    addProduct(product);

    createProduct({
      id: '',
      title: '',
      description: '',
      imgUrl: '',
      price: '',
    });
  };

  return (
    <div
      className="newProduct"
    >
      {user !== 'admin'
        ? (
          <>
            <h2
              className="newProduct__heading--error"
            >
              Sory but You can`t add products !!!
            </h2>
          </>
        )
        : (
          <div>
            <h2 className="newProduct__heading">Add new Product</h2>
            <div
              className="newProduct__formBlock"
            >
              <form
                className="newProduct__form form"
                onSubmit={event => newProduct(event)}
              >
                <label className="form__lable">
                  Title:
                  <input
                    name="title"
                    className="form__input"
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={event => hendleChange(event)}
                    required
                  />
                </label>
                <label className="form__lable">
                  Description:
                  <input
                    name="description"
                    className="form__input"
                    placeholder="Description"
                    type="text"
                    value={description}
                    onChange={event => hendleChange(event)}
                    required
                  />
                </label>
                <label className="form__lable">
                  Price:
                  <input
                    name="price"
                    className="form__input"
                    placeholder="Product price"
                    type="number"
                    value={price}
                    onChange={event => hendleChange(event)}
                    required
                  />
                </label>
                <label className="form__lable">
                  Upload photo:
                  <input
                    name="photo"
                    className="form__input"
                    type="file"
                    onChange={event => handlePhoto(event)}
                  />
                </label>
                <p className="form__or">
                  or write Image adress here
                </p>
                <label className="form__lable">
                  Image adress:
                  <input
                    name="imgUrl"
                    className="form__input"
                    placeholder="image URL"
                    type="url"
                    value={imgUrl}
                    onChange={event => hendleChange(event)}
                  />
                </label>
                <button
                  className="form__button"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  );
};

NewProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  user: PropTypes.string.isRequired,
};
