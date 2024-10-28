import * as Constants from "products/constants.js";
import ProductsRoutes from "products/routes.js";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductsRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
