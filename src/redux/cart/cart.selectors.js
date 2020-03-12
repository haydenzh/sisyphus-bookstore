import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  items => items.reduce((accumulated,item) => accumulated + item.quantity,0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  items => items.reduce((accumulated,item) =>accumulated + item.price * item.quantity,0)
);