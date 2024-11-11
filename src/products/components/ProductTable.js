import * as R from "ramda";
import { useMemo } from "react";
import { FilterSection } from "products/components/FilterSection.js";
import { ProductTableRow } from "products/components/ProductTableRow.js";

export const ProductTable = ({
  products,
  available,
  pending,
  handleFilter,
  resetProducts,
  handleCheckbox,
  handleHeaderCheckbox,
  selectedProducts,
  allSelected,
}) => {
  const productTable = useMemo(() => {
    return R.map(
      (product) => (
        <ProductTableRow
          key={crypto.randomUUID()}
          product={product}
          handleCheckbox={handleCheckbox}
          selectedProducts={selectedProducts}
        />
      ),
      products
    );
  }, [products, handleCheckbox, selectedProducts]);

  const emptyProductTable = (
    <tr className="[&>*]:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 font-bold">
      <td colSpan={6}>No products</td>
    </tr>
  );

  return (
    <div className="m-10 text-zinc-100">
      <FilterSection
        available={available}
        pending={pending}
        handleFilter={handleFilter}
        resetProducts={resetProducts}
      />
      <table className="table-auto w-full text-center border border-zinc-600">
        <thead className="bg-zinc-800">
          <tr className="border border-zinc-600 [&>*]:p-3.5 [&>*]:border [&>*]:border-zinc-600">
            <th>
              <input
                type="checkbox"
                name="selectAll"
                className="w-4 h-4 cursor-pointer"
                checked={allSelected}
                onChange={() => handleHeaderCheckbox()}
              />
            </th>
            <th>Name</th>
            <th>Location</th>
            <th>UOM</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{R.isEmpty(products) ? emptyProductTable : productTable}</tbody>
      </table>
    </div>
  );
};
