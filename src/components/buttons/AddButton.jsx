const AddButton = ({ onClick }) => {
  return(
    <button
      type="button"
      onClick={onClick}
      className="bg-primary-dark text-white text-lg rounded-md hover:ring-2 hover:ring-slate-900 py-2 px-4"
    >
      +
    </button>
  );
};
export default AddButton;