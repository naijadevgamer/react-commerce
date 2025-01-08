import rootReducer from "./Redux/root.reducer";

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface ShopCategory {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}

export type RootState = ReturnType<typeof rootReducer>;
