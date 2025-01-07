import { Item } from "@/interfaces";
import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

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
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
