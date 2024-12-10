// import { User } from "@/interfaces";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  User,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeK3PE2BhwfleZQFHszr4hKctiR_ftdOE",
  authDomain: "cavitorio-db.firebaseapp.com",
  projectId: "cavitorio-db",
  storageBucket: "cavitorio-db.firebasestorage.app",
  messagingSenderId: "675426044004",
  appId: "1:675426044004:web:84328954f225838e57f771",
  measurementId: "G-95YT3VWPR3",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleMobile = () =>
  signInWithRedirect(auth, googleProvider);

// Create or fetch user profile
export const createUserProfileDocument = async (
  userAuth: User,
  additionalData?: { [key: string]: any },
) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return userRef;
};

// Sign out
export const signOutUser = () => signOut(auth);

export default firebase;
