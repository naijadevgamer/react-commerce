import { Item } from "@/interfaces";
import CartItem from "./CartItem";

const CartItems = ({ cartItems }: { cartItems: Item[] }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </ul>
  );
};

export default CartItems;
