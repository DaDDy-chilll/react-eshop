// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import SignupFrom from "../sign-up-form/sign-up-form.component";
const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     console.log(response);
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignupFrom />
    </div>
  );
};
export default SignIn;
