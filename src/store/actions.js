export const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CHANGE_USER = 'CHANGE_USER';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const changeUser = value => ({
  type: CHANGE_USER,
  value,
});

export const removeProducts = () => ({
  type: REMOVE_PRODUCTS,
});

export const deleteProduct = value => ({
  type: DELETE_PRODUCT,
  value,
});

export const addProduct = value => ({
  type: ADD_PRODUCT,
  value,
});
