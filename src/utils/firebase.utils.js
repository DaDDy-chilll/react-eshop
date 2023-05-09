import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1Lw0YJNJMyRs-3Sedwj9NR-IHlZvSOZY",

  authDomain: "e-shop-db-edb4d.firebaseapp.com",

  projectId: "e-shop-db-edb4d",

  storageBucket: "e-shop-db-edb4d.appspot.com",

  messagingSenderId: "19649241352",

  appId: "1:19649241352:web:237b1954e4461bef958cbd",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists);
};
