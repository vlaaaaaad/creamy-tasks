import { useNavigate } from "react-router-dom";

export const NavigationButton = ({ pageName, buttonText, color }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(pageName)}
      className={
        "m-2.5 text-zinc-100 rounded bg-" +
        color +
        "-700 px-4 py-2 text-xs font-bold uppercase shadow-dark-3 transition duration-500 ease-in-out disabled:cursor-not-allowed"
      }
    >
      {buttonText}
    </button>
  );
};
