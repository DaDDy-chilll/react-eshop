import { useState } from "react";
const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupFrom = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign UP with your email and password</h1>
      <form action="" onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupFrom;
