import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root.reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serialization check
    }).concat(logger),
});

export default store;
