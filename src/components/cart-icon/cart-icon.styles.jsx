import styled from "styled-components";

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Shoppingicon = styled.div``;

const ItemCount = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export { CartIconContainer, Shoppingicon, ItemCount };

// .cart-icon-container {

//   .shopping-icon {

//   }

//   .item-count {
//     position: absolute;
//     font-size: 10px;
//     font-weight: bold;
//     bottom: 12px;
//   }
// }
