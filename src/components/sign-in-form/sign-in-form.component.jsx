import { useState } from "react";
// import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import {
  SignInContainer,
  Message,
  ButtonContainer,
} from "./sign-in-form.styles.jsx";
const defaultFromFields = {
  email: "",
  password: "",
};

const SignInFrom = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const SignInWithGoogle = async () => {
    await signInWithGooglePopUp();
    // createUserDocumentFromAuth(user);
  };

  const resetForm = () => setFormFields(defaultFromFields);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      // setCurrentUser(user);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          console.log("worng password");
          break;
        case "auth/user-not-found":
          console.log("user not found");
          break;
        default:
          console.log("error with create user", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <Message>Already have an account</Message>
      <span>Sign In with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
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

        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={SignInWithGoogle}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInFrom;
