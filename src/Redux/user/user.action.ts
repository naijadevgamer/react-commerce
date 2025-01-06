import { User } from "firebase/auth";
import { userActionTypes } from "./user.types";

export const setCurrentUser = (user: User | null) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
