import { Item } from "@/interfaces";
import { addItemToCart } from "@/Redux/cart/cart.action";
import { Dispatch } from "@reduxjs/toolkit";
import { connect, ConnectedProps } from "react-redux";

const CollectionItem = ({ item, addItemToCart }: CollectionItemProps) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="group relative rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl transition duration-500 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={name}
          className="h-64 w-full transform object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Glow Animation */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 blur-lg transition duration-500 group-hover:opacity-40"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-white">
        {/* Name */}
        <h3 className="text-lg font-semibold transition duration-300 group-hover:text-purple-400">
          {name}
        </h3>

        {/* Price */}
        <p className="mt-1 text-sm text-gray-400">${price.toFixed(2)}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addItemToCart(item)}
          className="mt-4 w-full transform cursor-pointer rounded-lg bg-purple-600 py-2 text-white shadow-md transition duration-300 hover:bg-purple-700 group-hover:translate-y-1 group-hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItemToCart: (item: Item) => dispatch(addItemToCart(item)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface AdditionalProps {
  item: Item;
}

type CollectionItemProps = AdditionalProps & PropsFromRedux;

const ConnectedCollectionItem = connector(CollectionItem);

export default ConnectedCollectionItem;
