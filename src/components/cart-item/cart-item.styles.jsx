import styled from "styled-components";

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
export { CartItemContainer, ItemDetails };

// .cart-item-container {

//   img {
//     width: 30%;
//   }

//   .item-details {

//     .name {
//       font-size: 16px;
//     }
//   }
// }
