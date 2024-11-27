import React, { useEffect, useMemo } from "react";
import * as R from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { formAction, clearForm, fillForm } from "products/actions";
import { useNavigate } from "react-router-dom";

export const ProductForm = ({
  formName,
  productToEdit,
  initialFormData,
  handleSave,
}) => {
  const uomData = [
    {
      id: 1,
      value: "Each",
    },
    {
      id: 2,
      value: "Tons",
    },
    {
      id: 3,
      value: "Loads",
    },
  ];
  const locationData = [
    {
      id: 1,
      name: "Main Warehouse",
    },
    {
      id: 2,
      name: "East Distribution Center",
    },
    {
      id: 3,
      name: "West Storage",
    },
    {
      id: 4,
      name: "South Depot",
    },
    {
      id: 5,
      name: "North Hub",
    },
    {
      id: 6,
      name: "Central Warehouse",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, location, uom, status } = useSelector(
    (state) => state.productForm
  );
  const formData = useSelector((state) => state.productForm);
  useEffect(() => {
    dispatch(fillForm(initialFormData));
  }, []);
  const locationOptions = useMemo(() => {
    return R.map(
      (location) => (
        <option
          key={crypto.randomUUID()}
          id={location.id}
          value={location.name}
        >
          {location.name}
        </option>
      ),
      locationData
    );
  }, [locationData]);
  const uomOptions = useMemo(() => {
    return R.map(
      (uom) => (
        <option key={crypto.randomUUID()} id={uom.id} value={uom.value}>
          {uom.value}
        </option>
      ),
      uomData
    );
  }, [uomData]);
  const formValuesAsProduct = {
    id: productToEdit ? productToEdit.id : crypto.randomUUID(),
    name: name,
    location: {
      id: R.find(R.propEq(location, "name"))(locationData).id,
      name: location,
    },
    uom: {
      id: R.find(R.propEq(uom, "value"))(uomData).id,
      value: uom,
    },
    qty: 1,
    status: {
      id: status === "Available" ? 1 : 2,
      value: status,
    },
  };

  return (
    <form className="bg-zinc-800 border border-zinc-600 rounded text-zinc-100 px-10 py-5">
      <h2 className="font-bold text-center text-xl mb-5 ">
        {formName === "New Product" ? (
          formName
        ) : (
          <span className="italic">{productToEdit.id}</span>
        )}
      </h2>
      <div className="flex mb-2.5">
        <label className="mr-2.5" htmlFor="name">
          Name:
        </label>
        <input
          className="bg-zinc-700 rounded px-1.5 grow"
          type="text"
          id="name"
          value={name}
          onChange={(event) => dispatch(formAction("name", event.target.value))}
          required
        />
      </div>
      <div className="flex mb-2.5">
        <label className="mr-2.5" htmlFor="location">
          Location:
        </label>
        <select
          className="bg-zinc-700 rounded grow"
          key={crypto.randomUUID()}
          id="location"
          name="location"
          value={location}
          onChange={(event) =>
            dispatch(formAction("location", event.target.value))
          }
        >
          {locationOptions}
        </select>
      </div>
      <div className="flex mb-2.5">
        <label className="mr-2.5" htmlFor="uom">
          Unit of Measurement (UOM):
        </label>
        <select
          className="bg-zinc-700 rounded grow"
          id="uom"
          name="uom"
          value={uom}
          onChange={(event) => dispatch(formAction("uom", event.target.value))}
        >
          {uomOptions}
        </select>
      </div>
      <div className="flex mb-5">
        <div className="mr-2.5">Status:</div>
        <label className="mr-2.5">
          <input
            className="mr-1"
            type="radio"
            name="status"
            checked={status === "Available"}
            onChange={() => dispatch(formAction("status", "Available"))}
          />
          Available
        </label>
        <label>
          <input
            className="mr-1"
            type="radio"
            name="status"
            checked={status === "Pending"}
            onChange={() => dispatch(formAction("status", "Pending"))}
          />
          Pending
        </label>
      </div>

      <div className="flex flex-row-reverse items-center [&>*]:ml-2.5">
        <button
          className="text-zinc-100 rounded bg-blue-700 hover:bg-blue-800  px-4 py-2 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:cursor-not-allowed"
          onClick={() => handleSave(formValuesAsProduct)}
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(clearForm());
            navigate("/products");
          }}
          disabled={!R.equals(initialFormData, formData)}
          className=" text-red-100 rounded bg-red-700 hover:bg-red-800  px-4 py-2 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:bg-zinc-700 disabled:text-zinc-300 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          type="button"
          className=" text-zinc-100 rounded bg-yellow-700 hover:bg-yellow-800  px-4 py-2 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:bg-zinc-700 disabled:text-zinc-300 disabled:cursor-not-allowed"
          disabled={R.equals(initialFormData, formData)}
          onClick={() => {
            dispatch(fillForm(initialFormData));
          }}
        >
          Undo
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
