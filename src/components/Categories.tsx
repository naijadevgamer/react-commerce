import man from "@/assets/man.jpg";

// type ForecastObject = {
//   title: string;
//   imageUrl: string;
//   size?: string;
//   id: number;
//   linkUrl: string;
// };

const categories = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const Categories = () => {
  return (
    <section className="mb-16">
      <div className="mb-6 flex justify-between">
        <h1 className="text-3xl">Categories</h1>
        <p className="text-xl uppercase text-gray-400">
          Men Women Sneakers Jackets Hats
        </p>
      </div>
      <div className="grid h-[60vw] grid-cols-category grid-rows-category gap-4 md:gap-8">
        <figure className="row-span-2 grid place-items-center overflow-hidden rounded-3xl">
          <img
            src={man}
            alt=""
            className="size-[120%] bg-top object-cover duration-image hover:size-full"
          />
        </figure>

        <figure className="row-span-2 row-start-3 grid place-items-center overflow-hidden rounded-3xl">
          <img
            src={man}
            alt=""
            className="size-[120%] bg-top object-cover duration-image hover:size-full"
          />
        </figure>

        <figure className="col-span-2 row-span-full row-start-5 grid place-items-center overflow-hidden rounded-3xl">
          <img
            src={man}
            alt=""
            className="size-[120%] bg-top object-cover duration-image hover:size-full"
          />
        </figure>

        <figure className="col-span-2 row-span-4 grid place-items-center overflow-hidden rounded-3xl">
          <img
            src={man}
            alt=""
            className="size-[120%] bg-top object-cover duration-image hover:size-full"
          />
        </figure>

        <figure className="col-span-1 row-span-3 grid place-items-center overflow-hidden rounded-3xl">
          <img
            src={man}
            alt=""
            className="size-[120%] bg-top object-cover duration-image hover:size-full"
          />
        </figure>
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
