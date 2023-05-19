import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories.preview/categories-preview.component";
import Category from "../category/category.component";

// import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import "./shop.styles.jsx";
import {
  fetchCategoriesStartAsync,
  // setCategories,
} from "../../store/categories/category.action";
const Shop = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryArray = await getCategoriesAndDocuments();
  //     dispatch(setCategories(categoryArray));
  //   };
  //   getCategoriesMap();
  // }, []);

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
