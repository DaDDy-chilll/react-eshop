import styled from "styled-components";

const CartDropDown = styled.div`
  position: absolute;
  width: 265px;
  height: 362px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const Cartitem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: auto;
`;

export { CartDropDown, Cartitem };

// .cart-dropdown-container {
//   position: absolute;
//   width: 265px;
//   height: 362px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {

//   }

//   button {
//
//   }
// }
