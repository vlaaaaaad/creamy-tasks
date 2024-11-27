import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsContainer } from "products/containers/ProductsContainer";
import { ProductsListContainer } from "products/containers/ProductsListContainer";
import { AddProductContainer } from "products/containers/AddProductContainer";
import { EditProductContainer } from "products/containers/EditProductContainer";

const ProductsRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProductsContainer />} />
      <Route exact path="/products" element={<ProductsListContainer />} />
      <Route exact path="/products/new" element={<AddProductContainer />} />
      <Route exact path="/products/:id" element={<EditProductContainer />} />
    </Routes>
  );
};

export default ProductsRoutes;
