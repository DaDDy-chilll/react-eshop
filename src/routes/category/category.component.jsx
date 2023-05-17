import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import { CateoryContainer, Title } from "./category.styles.jsx";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  //! Redux
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <Title>{category}</Title>
      <CateoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CateoryContainer>
    </>
  );
};
export default Category;
