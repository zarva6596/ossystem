import {
  REMOVE_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  CHANGE_USER,
} from './actions';

import { initialState } from './state';

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: action.value,
      };

    case DELETE_PRODUCT:

      return {
        ...state,
        products: [...state.products]
          .filter(product => product.id !== action.value),
      };

    case REMOVE_PRODUCTS:
      return {
        ...state,
        products: [],
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.value],
      };

    default:
      return { ...state };
  }
};
