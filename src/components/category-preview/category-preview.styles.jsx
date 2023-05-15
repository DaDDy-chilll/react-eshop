import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryPriviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export { CategoryPriviewContainer, Title, Preview };

// .category-preview-container {

//   .title {

//   }

//   .preview {

// }
