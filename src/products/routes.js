import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductContainer } from "products/containers/ProductsContainer";

const ProductsRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProductContainer />} />
    </Routes>
  );
};

export default ProductsRoutes;
