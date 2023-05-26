import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { PaymentFromContainer, FormContainer } from "./payment-form.styles";

const PaymentFrom = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHander = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
  };
  return (
    <PaymentFromContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFromContainer>
  );
};

export default PaymentFrom;
