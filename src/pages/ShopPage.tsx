import CollectionPreview from "@/components/CollectionPreview";
import { selectShopData } from "@/Redux/shopData/selector";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";

const ShopPage = ({ collections }: ShopPageProps) => {
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

const connector = connect(mapStateToProps);
type ShopPageProps = ConnectedProps<typeof connector>;

export default connector(ShopPage);
