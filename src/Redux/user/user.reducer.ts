import { User } from "firebase/auth";
import { userActionTypes } from "./user.types";

interface InitialState {
  currentUser: User | null;
}

interface Action {
  type: string;
  payload: User | null;
}

const initialState: InitialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action: Action) => {
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
