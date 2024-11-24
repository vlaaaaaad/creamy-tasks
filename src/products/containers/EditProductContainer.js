import * as R from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduct, clearForm } from "products/actions";
import { ProductForm } from "products/components/ProductForm.js";

export const EditProductContainer = () => {
  const { id } = useParams();
  const productToEdit = R.find(R.propEq(id, "id"))(
    useSelector((state) => state.products)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (updatedProduct) => {
    dispatch(
      updateProduct({
        id: updatedProduct.id,
        name: updatedProduct.name,
        location: {
          id: 0,
          name: updatedProduct.location.name,
        },
        uom: {
          id: 0,
          value: updatedProduct.uom.value,
        },
        qty: 0,
        status: {
          id: 0,
          value: updatedProduct.status.value,
        },
      })
    );
    dispatch(clearForm());
    navigate("/products");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <ProductForm
        formName={"Edit Product " + id}
        productToEdit={productToEdit}
        initialFormData={{
          name: productToEdit.name,
          location: productToEdit.location.name,
          uom: productToEdit.uom.value,
          status: productToEdit.status.value,
        }}
        handleSave={handleEdit}
      />
    </div>
  );
};
