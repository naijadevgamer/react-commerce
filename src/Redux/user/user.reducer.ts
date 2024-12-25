import { User } from "firebase/auth";
// import { Action } from "redux";

interface InitialState {
  currentUser: User | null;
}
interface Action {
  type: string;
  payload?: unknown;
}

const initialState: InitialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
