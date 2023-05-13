import { Children, createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  ///
};
const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCardItem] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCardItem(addCartItem(cartItem, productToAdd));
  };
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
