import { RootState } from "@/interfaces";
import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);
