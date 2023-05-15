import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Cartitem, CartDropDown } from "./cart-dropdown.styles.jsx";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOut = () => navigate("/checkout");
  return (
    <CartDropDown>
      <Cartitem>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </Cartitem>
      <Button onClick={goToCheckOut}>Go To Checkout</Button>
    </CartDropDown>
  );
};

export default CartDropdown;
