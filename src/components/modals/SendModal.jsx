import { useForm } from "react-hook-form";

import ConnectionSelect from "@/components/select/ConnectionSelect";

const SendModal = ({
  connectionId,
  data,
  onAddConnection,
  onSubmit
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      connection: connectionId
    }
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <ConnectionSelect onAdd={onAddConnection} register={register} />
      {errors.connection?.type === 'required' && <p role="alert" className="text-red-400 font-medium">Connection is required</p>}
      <div className="h-4" />
      <button type="submit" className="modalButtons">
        Send
      </button>
    </form>
  );
};
export default SendModal;