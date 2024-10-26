import { useState } from "react";
import { ordersData } from "../../ordersData.ts";
import { ProductTable } from "../components/ProductTable.js";
import * as R from "ramda";

const initialProducts = R.reduce(
  (accumulator, currentValue) => {
    const existingProduct = R.find((product) => product.id === currentValue.id)(
      accumulator
    );
    if (existingProduct) {
      existingProduct.qty += currentValue.qty;
    } else {
      accumulator = R.append(currentValue, accumulator);
    }
    return accumulator;
  },
  [],
  R.chain((order) => order.products, ordersData)
);

export const ProductContainer = () => {
  const [products, setProducts] = useState(initialProducts);
  const [available, setAvailable] = useState(false);
  const [pending, setPending] = useState(false);

  // const filterBy = (statusId) => {
  //   setProducts(
  //     initialProducts.filter((product) => product.status.id === statusId)
  //   );
  // };

  const resetProducts = () => {
    setAvailable(false);
    setPending(false);
    setProducts(initialProducts);
  };

  const handleFilter = (statusId) => {
    if (statusId === 1) {
      if (!available) {
        setAvailable(!available);
        setPending(available);
        setProducts(
          R.filter((product) => product.status.id === statusId, initialProducts)
        );
      } else {
        resetProducts();
      }
    } else if (statusId === 2) {
      if (!pending) {
        setPending(!pending);
        setAvailable(pending);
        setProducts(
          R.filter((product) => product.status.id === statusId, initialProducts)
        );
      } else {
        resetProducts();
      }
    }
  };

  return (
    <ProductTable
      products={products}
      available={available}
      pending={pending}
      handleFilter={handleFilter}
      resetProducts={resetProducts}
    />
  );
};
