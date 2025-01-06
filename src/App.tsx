import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "@/firebase/firebase.utils";
import { User } from "firebase/auth";
import ConnectedNavbar from "@/components/Navbar";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.action";
import { DocumentSnapshot, onSnapshot } from "firebase/firestore";

const App = ({
  setCurrentUser,
}: {
  setCurrentUser: (user: User | null) => void;
}) => {
  // const location = useLocation();

  // // Routes where Navbar and Footer should be hidden
  // const noLayoutRoutes = ["/login", "/signup"];

  // // Check if the current path matches one of the no-layout routes
  // const hideLayout = noLayoutRoutes.includes(location.pathname);

  interface ExtendedUser extends User {
    id: string;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        console.log("User ref after:", userRef);

        if (!userRef) {
          console.error("User reference is undefined");
          return;
        }

        onSnapshot(userRef, (doc: DocumentSnapshot) => {
          console.log("doc:", doc);
          setCurrentUser({
            id: doc.id,
            ...doc.data(),
          } as ExtendedUser);
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); // Clean up listener
  }, []); // Dependency array ensures the effect runs only on mount

  return (
    <div>
      <ConnectedNavbar />
      <main>
        <Outlet /> {/* Child components will render here */}
      </main>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user)),
});

const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default ConnectedApp;
