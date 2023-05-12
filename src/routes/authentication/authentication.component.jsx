// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";
// import {
//   signInWithGooglePopUp,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase.utils";

import SignupFrom from "../../components/sign-up-form/sign-up-form.component";
import SignInFrom from "../../components/sign-in-form/sign-in-form.component";
const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     console.log(response);
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);9267301743

  return (
    <div className="authentication-container">
      <SignInFrom />
      <SignupFrom />
    </div>
  );
};
export default Authentication;
