import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1Lw0YJNJMyRs-3Sedwj9NR-IHlZvSOZY",
  authDomain: "e-shop-db-edb4d.firebaseapp.com",
  projectId: "e-shop-db-edb4d",
  storageBucket: "e-shop-db-edb4d.appspot.com",
  messagingSenderId: "19649241352",
  appId: "1:19649241352:web:237b1954e4461bef958cbd",
};
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
const auth = getAuth();
//!--Google Oauth
const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
//!--username and password
const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = async () => await signOut(auth);

//! track sign in / sign out start change

const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//!-----------database
const db = getFirestore();

//new Collection

const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
  const collectionRef = collection(db);
};

const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "tusers", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt,
      ...additionalInfo,
    });
  }
  return userDocRef;
};
export {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
};
