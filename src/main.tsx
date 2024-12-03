import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/ShopPage.tsx";
import CartPage from "./pages/CartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not found</div>,
  },
  {
    path: "shop",
    element: <ShopPage />,
    children: [
      {
        path: ":itemId",
        element: <ShopPage />,
      },
    ],
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "login",
    // element: <Login />,
  },
  {
    path: "signup",
    // element: <Signup />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
