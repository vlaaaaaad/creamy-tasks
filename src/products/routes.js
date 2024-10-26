import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductContainer } from "./containers/ProductsContainer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
