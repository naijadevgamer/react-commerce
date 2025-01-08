import { Item } from "@/interfaces";
import { cartActionTypes } from "./cart.types";

export const addItemToCart = (item: Item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const incrementItemQuantity = (item: Item) => ({
  type: cartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: item,
});

export const decrementItemQuantity = (item: Item) => ({
  type: cartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});

export const removeItemFromCart = (item: Item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
