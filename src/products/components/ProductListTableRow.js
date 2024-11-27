import { useNavigate } from "react-router-dom";

export const ProductListTableRow = ({ product }) => {
  const navigate = useNavigate();
  return (
    <tr className="odd:bg-zinc-700 even:bg-zinc-800 [&>*]:p-3.5 border border-zinc-600 [&>*]:border [&>*]:border-zinc-600">
      <td>
        <a
          className="hover:underline hover:cursor-context-menu"
          onClick={() => navigate("/products/" + product.id)}
        >
          {product.name}
        </a>
      </td>
      <td>{product.location.name}</td>
      <td>{product.uom.value}</td>
      <td>{product.status.value}</td>
    </tr>
  );
};
