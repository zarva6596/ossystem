import productsFromServer from '../api/products.json';

const { data } = localStorage;

const localProducts = data && data.length > 0 ? JSON.parse(data)
  : [];

export const initialState = {
  products: [...productsFromServer, ...localProducts],
  user: 'admin',
};
