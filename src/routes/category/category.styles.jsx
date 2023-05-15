import styled from "styled-components";
const CateoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
const Title = styled.h2`
  font-size: 38px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 25px;
`;

export { CateoryContainer, Title };

// .category-container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;
// }

// .title {
//   font-size: 38px;
//   text-transform: uppercase;
//   text-align: center;
//   margin-bottom: 25px;
// }
