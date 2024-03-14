import { useForm } from "react-hook-form";

const QueriesModal = ({ data, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = async (formData) => {
    // Call the onSubmit function with the updated query value
    const updatedData = { ...data, query: formData.query };
    console.log('updated data:', updatedData);
    await onSubmit(updatedData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col space-y-4"
    >
      <label htmlFor="query">Query</label>
      <textarea
        id="query"
        name="query"
        placeholder="Query"
        defaultValue={data.query}
        {...register("query", { required: true })}
        className="modalFields p-2"
      />
      {errors.query && <span>This field is required.</span>}
      <div className="h-4" />
      <button type="submit" className="modalButtons">
        Save
      </button>
    </form>
  );
};

export default QueriesModal;
