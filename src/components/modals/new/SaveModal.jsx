import { useForm } from "react-hook-form";

const SaveModal = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  if (errors) {
    console.error(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <label htmlFor="name">Name*</label>
      <input id="name" type="text" placeholder="Name" {...register("name", { required: true })} />
      <input type="submit" />
    </form>
  );
};
export default SaveModal;