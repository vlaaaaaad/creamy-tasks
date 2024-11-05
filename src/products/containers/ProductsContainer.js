import { useState, useEffect } from "react";
import { ordersData } from "products/ordersData.ts";
import { ProductTable } from "products/components/ProductTable.js";
import { SelectedProducts } from "products/components/SelectedProducts.js";
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
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    if (products.length === selectedProducts.length && !R.isEmpty(products)) {
      setAllSelected(true);
    }
  }, [selectedProducts, products.length]);

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

  const handleCheckbox = (product) => {
    if (product === "all") {
      if (products.length === selectedProducts.length) {
        setSelectedProducts([]);
        setAllSelected(false);
      } else {
        setSelectedProducts(products);
      }
    } else {
      setAllSelected(false);
      if (R.includes(product, selectedProducts)) {
        setSelectedProducts(
          R.filter((currentProduct) => currentProduct.id !== product.id)
        );
      } else {
        setSelectedProducts(R.append(product, selectedProducts));
      }
    }
  };

  const countTotalQty = (qtyId, products) => {
    let counter = 0;
    R.forEach((product) => {
      if (product.uom.id === qtyId) {
        counter += product.qty;
      }
    }, products);
    return counter;
  };

  return (
    <div>
      <ProductTable
        products={products}
        available={available}
        pending={pending}
        handleFilter={handleFilter}
        resetProducts={resetProducts}
        handleCheckbox={handleCheckbox}
        selectedProducts={selectedProducts}
        allSelected={allSelected}
      />
      <SelectedProducts
        selectedProducts={selectedProducts}
        totalTons={countTotalQty(2, selectedProducts)}
        totalEach={countTotalQty(1, selectedProducts)}
      />
    </div>
  );
};
