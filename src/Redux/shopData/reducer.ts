import SHOP_DATA from "./shop.data";

const initialState = {
  shopData: SHOP_DATA,
};

const shopDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopDataReducer;
