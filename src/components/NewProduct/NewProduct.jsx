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

  const useStyles = makeStyles(theme => ({
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        boxShadow: '0 0 15px 0 rgba(0,0,0,0.1)',
      },
    },
  }));

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
              Sory but You can`t add products !!!
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
                  onChange={event => hendleChange(event)}
                  required
                />

                <TextField
                  name="price"
                  label="Price"
                  variant="outlined"
                  type="number"
                  value={price}
                  onChange={event => hendleChange(event)}
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
                  onChange={event => hendleChange(event)}
                  style={{ width: '100%' }}
                  required
                />

                <label className="form__lable">
                  Upload photo:
                  <input
                    type="file"
                    onChange={event => handlePhoto(event)}
                    style={{ display: 'none' }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                  or write Image adress here:
                </label>
                <div>
                  <TextField
                    name="imgUrl"
                    variant="outlined"
                    title="image URL"
                    type="url"
                    value={imgUrl}
                    onChange={event => hendleChange(event)}
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

NewProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  user: PropTypes.string.isRequired,
};
