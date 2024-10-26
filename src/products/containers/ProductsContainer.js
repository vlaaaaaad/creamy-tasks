import { useState } from "react";
import { ordersData } from "../../ordersData.ts";
import { ProductTable } from "../components/ProductTable.js";
import { filter } from "ramda";

const initialProducts = ordersData
  .flatMap((order) => order.products)
  .reduce((accumulator, currentValue) => {
    const existingProduct = accumulator.find(
      (product) => product.id === currentValue.id
    );
    if (existingProduct) {
      existingProduct.qty += currentValue.qty;
    } else {
      accumulator.push({ ...currentValue });
    }
    return accumulator;
  }, []);

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
          initialProducts.filter((product) => product.status.id === statusId)
        );
      } else {
        resetProducts();
      }
    } else if (statusId === 2) {
      if (!pending) {
        setPending(!pending);
        setAvailable(pending);
        setProducts();
        //R.filter(R.propEq("status", { id: statusId }), initialProducts)
        initialProducts.filter((product) => product.status.id === statusId);
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
