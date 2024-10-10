import { useState } from "react";
import "./App.css";
import { ProductTable } from "./products/components/ProductTable";

const App = () => {
  return (
    <div className="App">
      <ProductTable />
    </div>
  );
};

export default App;
