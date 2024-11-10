const CollectionItem = ({
  name,
  price,
  imageUrl,
}: {
  name: string;
  price: number;
  imageUrl: string;
}) => {
  return (
    <div className="relative flex h-[90vw] flex-col overflow-hidden rounded-t-md bg-red-50 shadow-lg sm:h-[25rem]">
      <div className="h-[90%] w-full overflow-hidden duration-200 hover:opacity-75">
        <img
          alt={name}
          src={imageUrl}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-2">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg text-gray-700">{name}</h3>
          <p className="text-base font-medium text-gray-900">${price}</p>
        </div>

        <button className="w-full bg-primary px-5 py-2 text-center text-sm font-medium text-white hover:bg-primary/80">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CollectionItem;
