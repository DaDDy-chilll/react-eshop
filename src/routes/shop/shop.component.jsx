import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      9899368805
    </div>
  );
};

export default Shop;
