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
        ? { ...cartItem, quantity: (cartItem.quantity as number) + 1 }
        : cartItem,
    );

    return newCartItems;
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: Item[],
  cartItemToRemove: Item,
) => {
  if (cartItemToRemove.quantity && cartItemToRemove.quantity <= 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: (cartItem.quantity as number) - 1 }
      : cartItem,
  );
};
