import { User } from "firebase/auth";
import { userActionTypes } from "./user.types";
import { Action } from "@/interfaces";
// import { Action } from "redux";

interface InitialState {
  currentUser: User | null;
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
