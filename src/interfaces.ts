export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ShopCategory {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}
