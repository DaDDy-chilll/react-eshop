import styled from "styled-components";

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const DefaultWidth = styled.span`
  width: 23%;
`;
const Quantity = styled.span`
  width: 23%;
  display: flex;
`;

const Arrow = styled.div`
  cursor: pointer;
`;
const Value = styled.span`
  margin: 0 10px;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export {
  CheckoutItemContainer,
  ImageContainer,
  DefaultWidth,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
};
// .checkout-item-container {

//   .image-container {

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .name,
//   .quantity,
//   .price {
//     width: 23%;
//   }

//   .quantity {
//     display: flex;

//     .arrow {
//       cursor: pointer;
//     }

//     .value {

//     }
//   }

//   .remove-button {

//   }
// }
