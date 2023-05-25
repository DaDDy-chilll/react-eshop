import { useState } from "react";
// import { UserContext } from "../../contexts/user.context";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { SignUpContainer, Message } from "./sign-up-form.styles.jsx";
const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupFrom = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);
  const resetForm = () => setFormFields(defaultFromFields);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(displayName);
    if (password !== confirmPassword) return;
    try {
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      dispatch(signUpStart(email, password, displayName));
      // setCurrentUser(user); //? UserContext hooks
      // await createUserDocumentFromAuth(user, { displayName });
      resetForm(defaultFromFields);
    } catch (error) {
      console.log("error with create user", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
      <Message>Don't have an account</Message>
      <span>Sign UP with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignupFrom;
