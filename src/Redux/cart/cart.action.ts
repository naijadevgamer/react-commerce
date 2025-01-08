import { Item } from "@/interfaces";
import { cartActionTypes } from "./cart.types";

export const addItemToCart = (item: Item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item: Item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: Item) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item,
});
