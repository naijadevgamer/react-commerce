import { Item } from "@/interfaces";

export const updateCartWithNewItem = (
  cartItems: Item[],
  cartItemToAdd: Item,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );

    return newCartItems;
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const filterOutItem = (cartItems: Item[], cartItemToRemove: Item) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export const incrementItemQuantity = (cartItems: Item[], cartItem: Item) => {
  return cartItems.map((item) =>
    item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item,
  );
};

export const decrementItemQuantity = (cartItems: Item[], cartItem: Item) => {
  if (cartItem.quantity <= 1) {
    return cartItems.filter((item) => item.id !== cartItem.id);
  }

  return cartItems.map((item) =>
    item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item,
  );
};
