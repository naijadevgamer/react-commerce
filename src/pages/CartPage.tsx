import CartItems from "@/components/CartItems";
import { Button } from "@/components/ui/button";
import { Item } from "@/interfaces";
import { connect } from "react-redux";

const CartPage = ({ cartItems }: { cartItems: Item[] }) => {
  return (
    <div>
      <div className="mx-auto mt-6 w-full max-w-lg px-2 sm:max-w-lg">
        <h1 className="text-center text-3xl font-semibold uppercase">
          Shopping Cart
        </h1>

        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1">
            <CartItems cartItems={cartItems} />
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>$310</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button className="w-full">Checkout</Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button className="font-medium text-primary hover:text-primary/80">
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CartState {
  cart: {
    cartItems: Item[];
  };
}

const mapStateToProps = (state: CartState) => ({
  cartItems: state.cart.cartItems,
});

const ConnectedCartPage = connect(mapStateToProps)(CartPage);

export default ConnectedCartPage;
