import { useForm } from "react-hook-form";

const QueriesModal = ({ data, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = async (formData) => {
    const updatedData = { ...data, query: formData.query, name: formData.name };
    await onSubmit(updatedData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col space-y-4"
    >
      <label htmlFor="query">Query</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        defaultValue={data.name}
        {...register("name")}
        className="modalFields p-2"
      />
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
