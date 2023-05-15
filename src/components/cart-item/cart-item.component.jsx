import { CartItemContainer, ItemDetails } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} style={{ width: "30%" }} />
      <ItemDetails>
        <span className="name" style={{ fontSize: "16px" }}>
          {name}
        </span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
