import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "@/firebase/firebase.utils";

import Navbar from "@/components/Navbar";
import { User } from "firebase/auth";

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await createUserProfileDocument(user);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); // Clean up listener
  }, []); // Dependency array ensures the effect runs only on mount
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
