import { Action, Item } from "@/interfaces";
import { cartActionTypes } from "./cart.types";

interface InitialState {
  cartItems: Item[];
}

const initialState: InitialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
