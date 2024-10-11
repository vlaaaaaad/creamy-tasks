import { useState } from "react";
import { ordersData } from "../../ordersData.ts";
import "../../App.css";

export const ProductTable = () => {
  const initialProducts = ordersData
    .flatMap((order) => order.products)
    .reduce((accumulator, currentValue) => {
      const existingProduct = accumulator.find(
        (product) =>
          product.id === currentValue.id &&
          product.status.id === currentValue.status.id
      );
      if (existingProduct) {
        existingProduct.qty += currentValue.qty;
      } else {
        accumulator.push({ ...currentValue });
      }
      return accumulator;
    }, []);
  const [products, setProducts] = useState(initialProducts);
  const [available, setAvailable] = useState(false);
  const [pending, setPending] = useState(false);

  const filterBy = (statusId) => {
    setProducts(
      initialProducts.filter((product) => product.status.id === statusId)
    );
  };
  const resetProducts = () => {
    setAvailable(false);
    setPending(false);
    setProducts(initialProducts);
  };

  return (
    <div>
      <div className="filterSection">
        <div className="checkbox">
          <input
            type="checkbox"
            id="avaliable"
            checked={available}
            onChange={() => {
              if (!available) {
                setAvailable(!available);
                setPending(available);
                filterBy(1);
              } else {
                resetProducts();
              }
            }}
          />
          <label htmlFor="avaliable">Avaliable</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="pending"
            checked={pending}
            onChange={() => {
              if (!pending) {
                filterBy(2);
                setPending(!pending);
                setAvailable(pending);
              } else {
                resetProducts();
              }
            }}
          />
          <label htmlFor="pending">Pending</label>
        </div>
        <button
          disabled={!available && !pending}
          onClick={resetProducts}
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
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
          {products.map((product) => (
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
    </div>
  );
};
