import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ProductTable } from "./products/components/ProductTable";
import "./index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductTable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
