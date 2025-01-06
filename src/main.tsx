import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/ShopPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { Provider } from "react-redux";
import store from "./Redux/store.ts";
import ConnectedApp from "./App.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ConnectedCartPage from "./pages/CartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ConnectedApp />, // Use Layout as the parent route
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
      { path: "cart", element: <ConnectedCartPage /> },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>, // Fallback for unmatched routes
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
