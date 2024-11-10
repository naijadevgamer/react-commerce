import CollectionPreview from "@/components/CollectionPreview";
import { ShopCategory } from "@/interfaces";
import SHOP_DATA from "@/shop.data";
import { useState } from "react";

const ShopPage = () => {
  // const id = useParams({ itemId });
  const [collections, _] = useState<ShopCategory[]>(SHOP_DATA);

  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
