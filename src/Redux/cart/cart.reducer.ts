import { Item } from "@/interfaces";
import { cartActionTypes } from "./cart.types";
import { updateCartWithNewItem, removeItemFromCart } from "./cart.utils";

interface CartState {
  cartItems: Item[];
}

interface CartAction {
  type: string;
  payload: Item;
}

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (
  state: CartState = initialState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: updateCartWithNewItem(state.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
