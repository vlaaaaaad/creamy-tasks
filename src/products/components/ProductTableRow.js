import * as R from "ramda";

export const ProductTableRow = ({
  product,
  handleCheckbox,
  selectedProducts,
}) => {
  return (
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
          onClick={() => {
            handleCheckbox(product);
          }}
          readOnly
        />
      </td>
      <td key={crypto.randomUUID()}>{product.name}</td>
      <td key={crypto.randomUUID()}>{product.location.name}</td>
      <td key={crypto.randomUUID()}>{product.uom.value}</td>
      <td key={crypto.randomUUID()}>{product.qty}</td>
      <td key={crypto.randomUUID()}>{product.status.value}</td>
    </tr>
  );
};
