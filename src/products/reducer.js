import * as R from "ramda";
import {
  ADD_PRODUCT,
  CLEAR_FORM,
  FILL_FORM,
  FORM_ACTION,
  UPDATE_PRODUCT,
} from "products/actions";

const initialState = {
  products: [],
  productForm: {
    name: "",
    location: "Main Warehouse",
    uom: "Each",
    status: "",
  },
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: R.map(
          (product) =>
            product.id === action.editedProduct.id
              ? { ...action.editedProduct }
              : product,
          state.products
        ),
      };

    case FORM_ACTION:
      const { field, value } = action.payload;
      return {
        ...state,
        productForm: { ...state.productForm, [field]: value },
      };
    case CLEAR_FORM:
      return {
        ...state,
        productForm: {
          name: "",
          location: "Main Warehouse",
          uom: "Each",
          status: "",
        },
      };
    case FILL_FORM:
      const formData = action.formData;
      return {
        ...state,
        productForm: {
          name: formData.name,
          location: formData.location,
          uom: formData.uom,
          status: formData.status,
        },
      };
    default:
      return state;
  }
};

export default myReducer;
