import { RootState } from "@/interfaces";
import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
);
