import { User } from "firebase/auth";
import { userActionTypes } from "./user.types";

interface UserState {
  currentUser: User | null;
}

interface UserAction {
  type: string;
  payload: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userReducer = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
