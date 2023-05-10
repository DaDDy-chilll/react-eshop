import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

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

//!-----------database
const db = getFirestore();
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
};
