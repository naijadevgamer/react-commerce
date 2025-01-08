import { Item } from "@/interfaces";
import { cartActionTypes } from "./cart.types";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  filterOutItem,
  updateCartWithNewItem,
} from "./cart.utils";

interface InitialState {
  cartItems: Item[];
}
interface Action {
  type: string;
  payload: Item;
}

const initialState: InitialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: updateCartWithNewItem(state.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: filterOutItem(state.cartItems, action.payload),
      };

    case cartActionTypes.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: incrementItemQuantity(state.cartItems, action.payload),
      };

    case cartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decrementItemQuantity(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
