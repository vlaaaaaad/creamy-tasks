export const SelectedTableRow = ({ product }) => {
  return (
    <tr
      key={crypto.randomUUID()}
      className="odd:bg-zinc-700 even:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600"
    >
      <td key={crypto.randomUUID()}>{product.name}</td>
      <td colSpan={2} key={crypto.randomUUID()}>
        {product.qty}
      </td>
    </tr>
  );
};
