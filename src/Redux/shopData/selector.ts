import { RootState } from "@/interfaces";
import { createSelector } from "@reduxjs/toolkit";

const urlIdConnector: Record<string, number> = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const shop = (state: RootState) => state.shop;

export const selectShopData = createSelector(
  [shop],
  (selector) => selector.shopData,
);

export const selectCollection = (url: string) =>
  createSelector([selectShopData], (collections) => {
    console.log(collections, url);
    return collections.find(
      (collection) => collection.id === urlIdConnector[url],
    );
  });
