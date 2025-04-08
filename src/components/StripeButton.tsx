import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
  // AddressElement,
  // LinkAuthenticationElement,
  // PaymentElement,
} from "@stripe/react-stripe-js";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";

// Load Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({
  price,
  closeModal,
}: {
  price: number;
  closeModal: () => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not yet loaded.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.log("CardElement not found.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error.message);
      alert("Payment failed: " + error.message);
    } else {
      console.log("Payment method created:", paymentMethod);
      alert("Payment successful! Simulating backend...");
      console.log("Simulated token:", paymentMethod.id);
      closeModal(); // Close the modal on success
    }

    // // Create a payment intent on your server (this is a placeholder URL)
    // const response = await fetch("/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ amount: price }),
    // });

    // const { clientSecret } = await response.json();

    // // Confirm the payment
    // const result = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement)!,
    //     billing_details: {
    //       name: "Customer Name", // Replace with user data
    //       email: "customer@example.com", // Replace with user data
    //     },
    //   },
    // });

    // if (result.error) {
    //   console.error("Payment failed:", result.error.message);
    //   alert("Payment failed. Please try again.");
    // } else if (result.paymentIntent?.status === "succeeded") {
    //   console.log("Payment succeeded:", result.paymentIntent);
    //   alert("Payment successful!");
    // }
  };

  return (
    <form onSubmit={handlePayment} className="mx-auto max-w-md">
      <h2 className="text-lg font-semibold">Cavitorio - Premium Products</h2>
      <p className="my-4 text-center text-secondary-foreground">
        Your purchase total: ${price.toFixed(2)}
      </p>

      {/* Collect email */}
      {/* <div className="mb-4">
        <h3>Email</h3>
        <LinkAuthenticationElement />
      </div> */}

      {/* Collect address */}
      {/* <div className="mb-4">
        <AddressElement options={{ mode: "shipping" }} />
      </div> */}

      <div className="rounded py-3 pl-1 ring-2">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px", // Larger and more readable font size
                color: "#333", // Dark text color for readability
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Modern font
                fontSmoothing: "antialiased", // Smooth edges for the text
                "::placeholder": {
                  color: "#888", // Subtle placeholder color
                },
              },
              invalid: {
                color: "#e74c3c", // Red color for invalid input
                iconColor: "#e74c3c", // Red icon color for invalid input
              },
            },
          }}
        />
      </div>

      {/* Payment details */}
      {/* <div className="mb-4">
        <h3>Payment Method</h3>
        <PaymentElement />
      </div> */}

      <button
        type="submit"
        disabled={!stripe}
        className="mt-5 w-full rounded border-none bg-accent px-5 py-2.5 font-bold text-white"
      >
        Pay Now
      </button>
    </form>
  );
};

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute size-full bg-black bg-opacity-50"
      ></div>
      <div className="relative w-[90%] max-w-md rounded-lg bg-white p-5 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-full text-xl"
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

const StripeCheckoutButton = ({ price }: { price: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // const mockClientSecret = "mock_client_secret_for_testing";

  return (
    <Elements
      stripe={stripePromise}
      // options={{ clientSecret: mockClientSecret }}
    >
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Button className="w-full" onClick={openModal}>
          Checkout
        </Button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CheckoutForm price={price} closeModal={closeModal} />
        </Modal>
      </div>
    </Elements>
  );
};

export default StripeCheckoutButton;
