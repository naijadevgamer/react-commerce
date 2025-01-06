import { Item } from "@/interfaces";
import { Minus, Plus } from "lucide-react";

const CartItem = ({ item }: { item: Item }) => {
  const { imageUrl, name, price } = item;

  return (
    <li className="group flex py-6 duration-500">
      {/* Product Image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full transform object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Name and Price */}
      <div className="ml-4 flex flex-1">
        <div className="flex flex-col justify-between py-5">
          <h3 className="text-lg font-semibold transition duration-300 group-hover:text-primary">
            name
          </h3>
          <p className="text-sm text-gray-400">${price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between py-4 text-sm">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button className="flex size-8 items-center justify-center rounded-full bg-gray-700 text-white transition duration-300 hover:bg-purple-600">
            <Minus className="size-3" />
          </button>
          <span>5</span>
          <button className="flex size-8 items-center justify-center rounded-full bg-gray-700 text-white transition duration-300 hover:bg-purple-600">
            <Plus className="size-3" />
          </button>
        </div>

        {/* Remove Button */}
        <div className="flex self-end">
          <button type="button" className="font-medium text-red-500">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
