import * as R from "ramda";

export const SelectedProducts = ({
  selectedProducts,
  totalTons,
  totalEach,
}) => {
  return (
    <div className="m-10 text-zinc-100">
      <table className="table-auto w-1/3 text-center border border-zinc-600">
        <caption className="p-2 text-lg font-bold">Selected products</caption>
        <thead className="bg-zinc-800">
          <tr className="border border-zinc-600 [&>*]:p-3.5 [&>*]:border [&>*]:border-zinc-600">
            <th>Name</th>
            <th colSpan={2}>Qty</th>
          </tr>
        </thead>
        <tbody>
          {R.isEmpty(selectedProducts) ? (
            <tr className="odd:bg-zinc-700 even:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600">
              <td key={crypto.randomUUID()}>-</td>
              <td colSpan={2} key={crypto.randomUUID()}>
                -
              </td>
            </tr>
          ) : (
            R.map(
              (product) => (
                <tr
                  key={crypto.randomUUID()}
                  className="odd:bg-zinc-700 even:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600"
                >
                  <td key={crypto.randomUUID()}>{product.name}</td>
                  <td colSpan={2} key={crypto.randomUUID()}>
                    {product.qty}
                  </td>
                </tr>
              ),
              selectedProducts
            )
          )}
        </tbody>

        <tfoot>
          <tr className="bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600">
            <td className="font-bold" rowSpan={2}>
              Total
            </td>
            <td>Tons</td>
            <td>Each</td>
          </tr>
          <tr className="bg-gradient-to-tl from-zinc-700 to-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600">
            <td>{totalTons}</td>
            <td>{totalEach}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
