// // import StripeCheckout, { Token } from "react-stripe-checkout";

// // const StripeCheckoutButton = ({ price }: { price: number }) => {
// //   // const publishableKey =

// //   const handleToken = (token: Token) => {
// //     // Implement your own logic to save the token
// //     // e.g. saveToDatabase, send to your server, etc.
// //     console.log("Token:", token);
// //     alert("Token saved");
// //     // You can also redirect to a success page here
// //     // window.location.href = "/success"; // Replace with your success page URL
// //   };
// //   return (
// //     <StripeCheckout
// //       stripeKey={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
// //       amount={price}
// //       currency="USD"
// //       email="your-email@example.com"
// //       token={(token) => handleToken(token)}
// //       allowRememberMe={false}
// //       shippingAddress={true}
// //       image="https://example.com/your-product-image.jpg"
// //       locale="en"
// //       name="Cavitorio"
// //       zipCode={true}
// //       label="Pay with Card"
// //       description="Your purchase"
// //       panelLabel="Pay Now"
// //     />
// //   );
// // };

// // export default StripeCheckoutButton;

// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// const StripeCheckoutButton = ({ price }: { price: number }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handlePayment = async () => {
//     if (!stripe || !elements) {
//       console.log("Stripe.js has not yet loaded.");
//       return;
//     }

//     // Get the CardElement
//     const cardElement = elements.getElement(CardElement);

//     if (!cardElement) {
//       console.log("CardElement not found.");
//       return;
//     }

//     // Create a payment method (simulated for testing)
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error.message);
//       alert("Payment failed: " + error.message);
//     } else {
//       console.log("Payment method created:", paymentMethod);
//       alert("Payment method created! Simulating backend call...");
//       // Simulate sending the token to the backend
//       console.log("Simulated token:", paymentMethod.id);
//       alert("Simulated backend saved the token.");
//     }

//     // Create a payment intent on your server (this is a placeholder URL)
//     // const response = await fetch("/create-payment-intent", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ amount: price }),
//     // });

//     // const { clientSecret } = await response.json();

//     // // Confirm the payment
//     // const result = await stripe.confirmCardPayment(clientSecret, {
//     //   payment_method: {
//     //     card: elements.getElement(CardElement)!,
//     //     billing_details: {
//     //       name: "Customer Name", // Replace with user data
//     //       email: "customer@example.com", // Replace with user data
//     //     },
//     //   },
//     // });

//     // if (result.error) {
//     //   console.error("Payment failed:", result.error.message);
//     //   alert("Payment failed. Please try again.");
//     // } else if (result.paymentIntent?.status === "succeeded") {
//     //   console.log("Payment succeeded:", result.paymentIntent);
//     //   alert("Payment successful!");
//     // }
//   };

//   return (
//     <div>
//       <h2 className="mb-2">Your purchase total: ${price.toFixed(2)}</h2>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       <button
//         onClick={handlePayment}
//         disabled={!stripe || !elements}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           background: "#5469d4",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//         className="text-right"
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default StripeCheckoutButton;

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

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
    <form
      onSubmit={handlePayment}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2 className="mb-2" style={{ textAlign: "center", color: "#333" }}>
        Your purchase total: ${price.toFixed(2)}
      </h2>
      <p style={{ textAlign: "center", fontSize: "14px", color: "#777" }}>
        Store: Cavitorio - Premium Products
      </p>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#5469d4",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
          width: "90%",
          maxWidth: "500px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "red",
            border: "none",
            color: "#000",
            fontSize: "16px",
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
        >
          &times;
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

  return (
    <Elements stripe={stripePromise}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={openModal}
          style={{
            padding: "10px 20px",
            backgroundColor: "#5469d4",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Checkout
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CheckoutForm price={price} closeModal={closeModal} />
        </Modal>
      </div>
    </Elements>
  );
};

export default StripeCheckoutButton;
