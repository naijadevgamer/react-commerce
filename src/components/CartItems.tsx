import { Item } from "@/interfaces";
import CartItem from "./cartItem";

const CartItems = ({ items }: { items: Item[] }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item) => (
        <CartItem item={item} />
      ))}
    </ul>
  );
};

export default CartItems;
