import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";
import shopDataReducer from "./shopData/reducer";
// import { RootState } from "@/interfaces";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  shop: shopDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer<RootState>(persistConfig, rootReducer as any);
