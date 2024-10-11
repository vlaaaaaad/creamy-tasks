import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import { ProductTable } from "./products/components/ProductTable";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductTable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
