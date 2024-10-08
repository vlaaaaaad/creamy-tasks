import { useState, useEffect } from "react";
import "./App.css";
import { ordersData } from "./ordersData.ts";

function App() {
  const [products, setProducts] = useState(
    ordersData.flatMap((order) => order.products)
  );
  const [available, setAvailable] = useState(true);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const reducedProducts = products.reduce((accumulator, currentValue) => {
      const existingProduct = accumulator.find(
        (product) =>
          product.name === currentValue.name &&
          product.status.value === currentValue.status.value
      );
      if (existingProduct) {
        existingProduct.qty += currentValue.qty;
      } else {
        accumulator.push({ ...currentValue });
      }
      return accumulator;
    }, []);
    setProducts(reducedProducts);
  }, []);

  return (
    <div className="App">
      <main>
        <div className="filterSection">
          <div className="checkbox">
            <input
              type="checkbox"
              id="avaliable"
              checked={available}
              disabled={pending}
              onChange={() => {
                setAvailable(!available);
              }}
            />
            <label htmlFor="avaliable">Avaliable</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="pending"
              checked={pending}
              disabled={available}
              onChange={() => {
                setPending(!pending);
              }}
            />
            <label htmlFor="pending">Pending</label>
          </div>
          <button
            disabled={!available && !pending}
            onClick={() => {
              setAvailable(false);
              setPending(false);
            }}
          >
            Clear filters
          </button>
        </div>
        <table>
          {/* <caption>Orders</caption> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>UOM</th>
              <th>Qty</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter(
                (product) =>
                  (product.status.value === "Available" && available) ||
                  (product.status.value === "Pending" && pending)
              )
              .map((product) => (
                <tr key={crypto.randomUUID()}>
                  <td key={crypto.randomUUID()}>{product.name}</td>
                  <td key={crypto.randomUUID()}>{product.location.name}</td>
                  <td key={crypto.randomUUID()}>{product.uom.value}</td>
                  <td key={crypto.randomUUID()}>{product.qty}</td>
                  <td key={crypto.randomUUID()}>{product.status.value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
