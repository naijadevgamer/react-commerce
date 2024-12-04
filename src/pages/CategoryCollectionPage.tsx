const CategoryCollectionPage = () => {
  return (
    <div>
      <div className="mx-auto max-w-xl px-4 py-8 sm:max-w-4xl sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-red inline-block cursor-pointer text-2xl font-bold tracking-tight md:text-3xl">
          {/* {title} */}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* {items.map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CategoryCollectionPage;
