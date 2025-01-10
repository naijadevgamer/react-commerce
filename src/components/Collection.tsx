// import { useParams } from "react-router-dom";
// import ConnectedCollectionItem from "./CollectionItem";
// import { selectCollection } from "@/Redux/shopData/selector";
// import { connect, ConnectedProps } from "react-redux";
// import { RootState } from "@/interfaces";

// const CollectionChild = ({ collection }: PropsFromRedux) => {
//   return (
//     <div className="mx-auto max-w-xl px-4 py-8 sm:max-w-4xl sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
//       <h2 className="text-red inline-block cursor-pointer text-2xl font-bold tracking-tight md:text-3xl">
//         {collection?.title}
//       </h2>

//       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//         {collection?.items.map((item) => (
//           <ConnectedCollectionItem key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Wrap the component to pass `params` as props
// const Collection = (props: PropsFromRedux) => {
//   const params = useParams();
//   return <CollectionChild {...props} params={params} />;
// };

// const mapStateToProps = (state: RootState, ownProps: RouteParams) => {
//   const { title } = ownProps; // Access the params from the props
//   return {
//     collection: selectCollection(title)(state), // Use `params.title` in your selector
//   };
// };

// interface RouteParams {
//   title: string; // The dynamic part of your URL (e.g., "/shop/:title")
// }

// const connector = connect(mapStateToProps);
// type PropsFromRedux = ConnectedProps<typeof connector> & RouteParams;

// // export default ConnectedNavbar; // Named export fixes the ESLint warning
// export default connector(Collection);

import { useParams } from "react-router-dom";
import ConnectedCollectionItem from "./CollectionItem";
import { selectCollection } from "@/Redux/shopData/selector";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/interfaces";

// Component to display a collection
const Collection = ({ collection }: PropsFromRedux) => {
  return (
    <div className="mx-auto max-w-xl px-4 py-8 sm:max-w-4xl sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <h2 className="text-red inline-block cursor-pointer text-2xl font-bold tracking-tight md:text-3xl">
        {collection?.title}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {collection?.items.map((item) => (
          <ConnectedCollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Wrapper component to fetch the `title` param and pass it to Redux
const CollectionWrapper = () => {
  const { collectionId } = useParams(); // Destructure the param
  const ConnectedCollection = connector(Collection); // Connect the child component
  return <ConnectedCollection title={collectionId!} />; // Pass param explicitly
};

// Redux state mapping
const mapStateToProps = (state: RootState, { title }: RouteParams) => ({
  collection: selectCollection(title)(state), // Fetch collection using the title
});

// RouteParams interface for URL params
interface RouteParams {
  title: string; // The dynamic segment in `/shop/:title`
}

// Connect Redux
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & RouteParams;

// Export the connected wrapper
export default CollectionWrapper;
