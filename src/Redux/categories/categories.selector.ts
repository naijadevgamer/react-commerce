import { RootState } from "@/interfaces";
import { createSelector } from "@reduxjs/toolkit";

const categories = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [categories],
  (categoriesSelect) => categoriesSelect.categories,
);
