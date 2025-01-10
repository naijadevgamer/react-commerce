import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "./CollectionPreview";
import { selectShopData } from "@/Redux/shopData/selector";

const CollectionOverview = ({ collections }: collectionOverviewProps) => {
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
type collectionOverviewProps = ConnectedProps<typeof connector>;

export default connector(CollectionOverview);
