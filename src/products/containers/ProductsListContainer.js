import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "products/actions";
import { ProductListTable } from "products/components/ProductListTable.js";
import { useNavigate } from "react-router-dom";

export const ProductsListContainer = () => {
  const navigate = useNavigate();
  const reduxProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [available, setAvailable] = useState(false);
  const [pending, setPending] = useState(false);

  const resetProducts = () => {
    setAvailable(false);
    setPending(false);
    //setProducts(reduxProducts);
  };

  const handleFilter = (statusId) => {
    if (statusId === 1) {
      if (!available) {
        setAvailable(!available);
        setPending(available);
        // setProducts(
        //   R.filter((product) => product.status.id === statusId, initialProducts)
        // );
      } else {
        resetProducts();
      }
    } else if (statusId === 2) {
      if (!pending) {
        setPending(!pending);
        setAvailable(pending);
        // setProducts(
        //   R.filter((product) => product.status.id === statusId, initialProducts)
        // );
      } else {
        resetProducts();
      }
    }
  };

  return (
    <div className="text-zinc-100 m-10">
      <button
        type="button"
        onClick={() => navigate("/")}
        className={
          "m-2.5 text-zinc-100 rounded bg-zinc-700 px-4 py-2 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:cursor-not-allowed hover:brightness-75"
        }
      >
        Go back
      </button>
      <button
        type="button"
        onClick={() => navigate("/products/new")}
        className={
          "m-2.5 text-zinc-100 rounded bg-zinc-700 px-4 py-2 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:cursor-not-allowed hover:brightness-75"
        }
      >
        Add new product
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            addProduct({
              id: crypto.randomUUID(),
              name: [
                "Apples",
                "Oranges",
                "Bananas",
                "Pears",
                "Grapes",
                "Coconuts",
                "Cherries",
                "Mangoes",
                "Strawberries",
                "Watermelons",
              ][Math.floor(Math.random() * 10)],
              location: {
                id: 0,
                name: [
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
                ][Math.floor(Math.random() * 6)].name,
              },
              uom: {
                id: 0,
                value: [
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
                ][Math.floor(Math.random() * 3)].value,
              },
              qty: 0,
              status: {
                id: 0,
                value: ["Available", "Pending"][
                  Math.floor(Math.random() * 1.25)
                ],
              },
            })
          )
        }
        className={
          "m-2.5 text-zinc-100 rounded bg-zinc-700 px-4 py-2 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:cursor-not-allowed hover:brightness-75"
        }
      >
        Add random product
      </button>
      <ProductListTable
        products={reduxProducts}
        available={available}
        pending={pending}
        handleFilter={handleFilter}
        resetProducts={resetProducts}
      />
    </div>
  );
};
