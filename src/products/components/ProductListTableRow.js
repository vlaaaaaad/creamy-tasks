import { useNavigate } from "react-router-dom";

export const ProductListTableRow = ({ product, selectedProducts }) => {
  const navigate = useNavigate();
  return (
    <tr
      key={crypto.randomUUID()}
      className="odd:bg-zinc-700 even:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600"
    >
      <td key={crypto.randomUUID()}>
        <a
          className="hover:underline hover:cursor-context-menu"
          onClick={() => navigate("/products/" + product.id)}
        >
          {product.name}
        </a>
      </td>
      <td key={crypto.randomUUID()}>{product.location.name}</td>
      <td key={crypto.randomUUID()}>{product.uom.value}</td>
      <td key={crypto.randomUUID()}>{product.status.value}</td>
    </tr>
  );
};
