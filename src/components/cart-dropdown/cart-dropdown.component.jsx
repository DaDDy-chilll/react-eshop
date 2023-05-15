import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  Cartitem,
  CartDropDownContainer,
  EmptpyMessage,
} from "./cart-dropdown.styles.jsx";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOut = () => navigate("/checkout");
  return (
    <CartDropDownContainer>
      <Cartitem>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptpyMessage>Your Cart is emplty.</EmptpyMessage>
        )}
      </Cartitem>
      <Button onClick={goToCheckOut}>Go To Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
