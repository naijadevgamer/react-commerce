import { RootState } from "@/interfaces";
import { createSelector } from "@reduxjs/toolkit";

const shop = (state: RootState) => state.shop;

export const selectShopData = createSelector(
  [shop],
  (selector) => selector.shopData,
);

export const selectShopDataForPreview = createSelector(
  [selectShopData],
  (selector) =>
    Object.keys(selector).map((key) => selector[key as keyof typeof selector]),
);

export const selectCollection = (url: string) =>
  createSelector([selectShopData], (collections) => {
    return collections[url as keyof typeof collections];
  });
