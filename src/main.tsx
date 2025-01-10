import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ShopPage from "./pages/ShopPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/store.ts";
import ConnectedApp from "./App.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ConnectedCartPage from "./pages/CartPage.tsx";
import { RootState } from "./interfaces.ts";
import CollectionOverview from "./components/CollectionOverview.tsx";
import CollectionWrapper from "./components/Collection.tsx";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "./Redux/store.ts";

const AppRouter = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ConnectedApp />, // Use Layout as the parent route
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "shop",
          element: <ShopPage />, // Parent for nested routes
          children: [
            {
              index: true, // Matches "/shop"
              element: <CollectionOverview />, // Component for "/shop"
            },
            {
              path: ":collectionId", // Matches "/shop/:itemId"
              element: <CollectionWrapper />, // Component for "/shop/:itemId"
            },
          ],
        },
        { path: "cart", element: <ConnectedCartPage /> },
        {
          path: "login",
          element: currentUser ? <Navigate to="/" replace /> : <LoginPage />,
        },
        {
          path: "signup",
          element: currentUser ? <Navigate to="/" replace /> : <RegisterPage />,
        },
      ],
    },
    {
      path: "*",
      element: <div>Not Found</div>, // Fallback for unmatched routes
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
      <AppRouter />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
);
