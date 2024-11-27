import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, clearForm } from "products/actions";
import { ProductForm } from "products/components/ProductForm.js";

export const AddProductContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (newProduct) => {
    dispatch(addProduct(newProduct));
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
