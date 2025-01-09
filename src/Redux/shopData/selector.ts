import { RootState } from "@/interfaces";
import { createSelector } from "@reduxjs/toolkit";

const shop = (state: RootState) => state.shop;

export const selectShopData = createSelector(
  [shop],
  (selector) => selector.shopData,
);
