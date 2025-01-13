import { useNavigate } from "react-router-dom";
import CartItems from "@/components/CartItems";
import { Button } from "@/components/ui/button";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "@/Redux/cart/cart.selector";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutButton from "@/components/StripeButton";

const CartPage = ({ cartItems, totalPrice }: PropsFromRedux) => {
  const navigate = useNavigate();

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <div>
      <div className="mx-auto mt-6 w-full max-w-lg px-2 sm:max-w-lg">
        <h1 className="text-center text-3xl font-semibold uppercase">
          Shopping Cart
        </h1>

        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1">
            {cartItems.length ? (
              <CartItems cartItems={cartItems} />
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 py-12 text-center">
                <span role="img" aria-label="Empty cart" className="text-6xl">
                  🛒
                </span>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Your cart is empty
                </h2>
                <p className="text-gray-600">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Button className="mt-4" onClick={() => navigate("/shop")}>
                  Start Shopping
                </Button>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Elements stripe={stripePromise}>
                <StripeCheckoutButton price={totalPrice} />
              </Elements>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  className="font-medium text-primary hover:text-primary/80"
                  onClick={() => navigate("/shop")}
                >
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ConnectedCartPage = connector(CartPage);

export default ConnectedCartPage;
