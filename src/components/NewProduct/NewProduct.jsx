import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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

  const id = `${products.length + 1}`;

  const handleChange = (event) => {
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

  const addLocalProduct = () => {
    const { data } = localStorage;

    const localProducts = data
      ? JSON.parse(data)
      : [];

    localProducts.push(product);

    localStorage.setItem('data',
      JSON.stringify(localProducts));
  };

  const newProduct = (event) => {
    event.preventDefault();

    addProduct(product);
    addLocalProduct();

    createProduct({
      id: '',
      title: '',
      description: '',
      imgUrl: '',
      price: '',
    });
  };

  const classes = useStyles();

  return (
    <div
      className="newProduct"
    >
      {user !== 'admin'
        ? (
          <>
            <Typography
              variant="h2"
              color="secondary"
              gutterBottom
            >
              Sorry but You can`t add products !!!
            </Typography>
          </>
        )
        : (
          <div>
            <Typography
              variant="h4"
              gutterBottom
            >
              Add new Product
            </Typography>
            <div
              className="newProduct__formBlock"
            >
              <form
                onSubmit={event => newProduct(event)}
                className={classes.form}
                autoComplete="off"
              >
                <TextField
                  name="title"
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={handleChange}
                  required
                />

                <TextField
                  name="price"
                  label="Price"
                  variant="outlined"
                  type="number"
                  value={price}
                  onChange={handleChange}
                  style={{ width: '100px' }}
                  required
                />

                <TextField
                  name="description"
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  type="text"
                  value={description}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                  required
                />

                <label className="form__label">
                  Upload photo:
                  <input
                    type="file"
                    onChange={handlePhoto}
                    className="form__input--none"
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                  or write Image address here:
                </label>
                <div>
                  <TextField
                    name="imgUrl"
                    variant="outlined"
                    title="image URL"
                    type="url"
                    value={imgUrl}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  className="form__button"
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      boxShadow: '0 0 15px 0 rgba(0,0,0,0.1)',
    },
  },
}));

NewProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  user: PropTypes.string.isRequired,
};
