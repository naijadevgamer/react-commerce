import { User } from "firebase/auth";

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

export interface Action {
  type: string;
  payload?: unknown;
}

export interface RootState {
  user: {
    currentUser: User | null;
  };
}
