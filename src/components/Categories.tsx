// import man from "@/assets/man.jpg";

import { selectCategories } from "@/Redux/categories/categories.selector";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";

// type Category = {
//   title: string;
//   imageUrl: string;
//   id: number;
//   grid: string;
//   linkUrl: string;
// };

const Categories = ({ categories }: PropsFromRedux) => {
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
        {categories.map(({ id, grid, imageUrl, title }) => (
          <figure
            key={id}
            className={`${grid} group relative cursor-pointer place-items-center overflow-hidden rounded-xl md:rounded-3xl`}
          >
            <img
              src={imageUrl}
              alt={title}
              className="size-[120%] bg-top object-cover brightness-50 duration-image group-hover:size-full"
            />
            <button className="sm:p3 absolute bottom-0 right-0 rounded-tl-xl bg-white/80 p-1 font-audiowide text-sm uppercase sm:p-3 sm:text-xl md:rounded-tl-3xl">
              {title}
            </button>
          </figure>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Categories);
