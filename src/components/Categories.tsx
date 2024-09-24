// import man from "@/assets/man.jpg";

// type Category = {
//   title: string;
//   imageUrl: string;
//   id: number;
//   grid: string;
//   linkUrl: string;
// };

const categories = [
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
];

const Categories = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <div className="mb-6 flex items-center justify-center gap-3 sm:justify-between">
        <h1 className="font-audiowide text-2xl font-semibold uppercase tracking-tight md:text-3xl">
          Categories
        </h1>
        <p className="hidden uppercase text-gray-400 sm:block md:text-xl">
          Men Women Sneakers Jackets Hats
        </p>
      </div>
      <div className="grid h-[120vw] grid-cols-category grid-rows-category gap-2 md:h-[70vw] md:gap-4 lg:gap-8 2xl:h-auto">
        {categories.map((category) => (
          <figure
            key={category.id}
            className={`${category.grid} group relative cursor-pointer place-items-center overflow-hidden rounded-xl md:rounded-3xl`}
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="size-[120%] bg-top object-cover brightness-50 duration-image group-hover:size-full"
            />
            <button className="sm:p3 absolute bottom-0 right-0 rounded-tl-xl bg-white/80 p-1 font-audiowide text-sm uppercase sm:p-3 sm:text-xl md:rounded-tl-3xl">
              {category.title}
            </button>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Categories;

{
  /* <figure className="grid-rows-[2/3]">
        <img src={man} alt="" clas/>
      </figure>
      <figure>
        <img src={man} alt="" />
      </figure>
      <figure>
        <img src={man} alt="" />
      </figure> */
}
