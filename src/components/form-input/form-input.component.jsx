import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";
const FormInput = ({ label, ...otherPorps }) => {
  return (
    <Group>
      <Input {...otherPorps} />
      {label && (
        <FormInputLabel shrink={otherPorps.value.length} htmlFor="">
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
