import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, clearForm } from "products/actions";
import { ProductForm } from "products/components/ProductForm.js";

export const AddProductContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (newProduct) => {
    dispatch(
      addProduct({
        id: crypto.randomUUID(),
        name: newProduct.name,
        location: {
          id: 0,
          name: newProduct.location.name,
        },
        uom: {
          id: 0,
          value: newProduct.uom.value,
        },
        qty: 0,
        status: {
          id: 0,
          value: newProduct.status.value,
        },
      })
    );
    dispatch(clearForm());
    navigate("/products");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <ProductForm
        formName={"New Product"}
        initialFormData={{
          name: "",
          location: "Main Warehouse",
          uom: "Each",
          status: "",
        }}
        handleSave={handleAdd}
      />
    </div>
  );
};
