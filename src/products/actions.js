export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FORM_ACTION = "FORM_ACTION";
export const CLEAR_FORM = "CLEAR_FORM";

export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});

export const updateProduct = (editedProduct) => ({
  type: UPDATE_PRODUCT,
  editedProduct,
});
export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const formAction = (field, value) => ({
  type: FORM_ACTION,
  payload: { field, value },
});
