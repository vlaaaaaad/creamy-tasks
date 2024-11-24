import * as R from "ramda";
import { useMemo } from "react";
import { FilterSection } from "products/components/FilterSection.js";
import { ProductListTableRow } from "products/components/ProductListTableRow.js";

export const ProductListTable = ({
  products,
  available,
  pending,
  handleFilter,
  resetProducts,
}) => {
  const productTable = useMemo(() => {
    return R.map(
      (product) => (
        <ProductListTableRow key={crypto.randomUUID()} product={product} />
      ),
      products
    );
  }, [products]);

  const emptyProductTable = (
    <tr className="[&>*]:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 font-bold">
      <td colSpan="4">No products</td>
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
            <th>Name</th>
            <th>Location</th>
            <th>UOM</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{R.isEmpty(products) ? emptyProductTable : productTable}</tbody>
      </table>
    </div>
  );
};
