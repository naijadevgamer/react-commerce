const initialState = {
  categories: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      grid: "row-span-2 grid",
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      grid: "row-span-2 row-start-3 grid",
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      grid: "col-span-2 row-span-full row-start-5 grid",
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      grid: "col-span-2 row-span-4 grid",
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      grid: "col-span-1 row-span-3 grid",
      linkUrl: "shop/mens",
    },
  ],
};

const categoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
