export const FilterSection = ({
  available,
  pending,
  handleFilter,
  resetProducts,
}) => {
  return (
    <div className="bg-zinc-800 border border-b-0 border-zinc-600 px-2.5 py-1.5 flex items-center float-start">
      <input
        type="checkbox"
        id="avaliable"
        className="mr-1 w-4 h-4 cursor-pointer"
        checked={available}
        onChange={() => handleFilter(1)}
      />
      <label htmlFor="avaliable" className="cursor-pointer">
        Avaliable
      </label>

      <input
        type="checkbox"
        id="pending"
        className="ml-2.5 mr-1 w-4 h-4 cursor-pointer"
        checked={pending}
        onChange={() => handleFilter(2)}
      />
      <label htmlFor="pending" className="cursor-pointer">
        Pending
      </label>

      <button
        type="button"
        disabled={!available && !pending}
        onClick={resetProducts}
        className="ml-2.5 inline-block rounded bg-red-900 disabled:bg-zinc-700 hover:bg-red-950 px-3 py-1.5 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:cursor-not-allowed"
      >
        Clear filter
      </button>
    </div>
  );
};
