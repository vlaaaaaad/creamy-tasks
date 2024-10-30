import * as R from "ramda";

export const ProductTable = ({
  products,
  available,
  pending,
  handleFilter,
  resetProducts,
  handleCheckbox,
  selectedProducts,
}) => {
  return (
    <div className="m-10 text-zinc-100">
      <div className="bg-zinc-800 border border-b-0 border-zinc-600 px-2.5 py-1.5 flex items-center float-start">
        <input
          type="checkbox"
          name="avaliable"
          className="mr-1 w-4 h-4 cursor-pointer"
          checked={available}
          onChange={() => {
            handleFilter(1);
          }}
        />
        <label htmlFor="avaliable" className="cursor-pointer">
          Avaliable
        </label>

        <input
          type="checkbox"
          name="pending"
          className="ml-2.5 mr-1 w-4 h-4 cursor-pointer"
          checked={pending}
          onChange={() => {
            handleFilter(2);
          }}
        />
        <label htmlFor="pending" className="cursor-pointer">
          Pending
        </label>

        <button
          type="button"
          disabled={!available && !pending}
          onClick={resetProducts}
          className="ml-2.5 inline-block rounded bg-red-900 disabled:bg-zinc-700 hover:bg-red-950 px-3 py-1.5 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:cursor-not-allowed"
        >
          Clear filter
        </button>
      </div>
      <table className="table-auto w-full text-center border border-zinc-600">
        <thead className="bg-zinc-800">
          <tr className="border border-zinc-600 [&>*]:p-3.5 [&>*]:border [&>*]:border-zinc-600">
            <th>✔️</th>
            <th>Name</th>
            <th>Location</th>
            <th>UOM</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {R.map(
            (product) => (
              <tr
                key={crypto.randomUUID()}
                className="odd:bg-zinc-700 even:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600"
              >
                <td key={crypto.randomUUID()} className="!p-0">
                  <input
                    type="checkbox"
                    name="selected"
                    checked={R.includes(product, selectedProducts)}
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleCheckbox(product)}
                    readOnly
                  />
                </td>
                <td key={crypto.randomUUID()}>{product.name}</td>
                <td key={crypto.randomUUID()}>{product.location.name}</td>
                <td key={crypto.randomUUID()}>{product.uom.value}</td>
                <td key={crypto.randomUUID()}>{product.qty}</td>
                <td key={crypto.randomUUID()}>{product.status.value}</td>
              </tr>
            ),
            products
          )}
        </tbody>
      </table>
    </div>
  );
};
