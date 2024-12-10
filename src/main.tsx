import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/ShopPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use Layout as the parent route
    children: [
      { path: "/", element: <HomePage /> },
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
      { path: "cart", element: <CartPage /> },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>, // Fallback for unmatched routes
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
