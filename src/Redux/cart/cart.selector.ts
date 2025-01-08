import { Item, RootState } from "@/interfaces";
import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: Item[]) =>
    cartItems.reduce(
      (acc: number, cartItem: Item) => acc + cartItem.quantity,
      0,
    ),
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems: Item[]) =>
    cartItems.reduce(
      (acc: number, cartItem: Item) => acc + cartItem.quantity * cartItem.price,
      0,
    ),
);
