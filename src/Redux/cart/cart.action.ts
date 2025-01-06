import { cartActionTypes } from "./cart.types";

export const setCartItems = (item: any) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
