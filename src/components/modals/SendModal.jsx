import { useForm } from "react-hook-form";

import ConnectionSelect from "@/components/select/ConnectionSelect";

import { toastErrors } from "@/helpers";

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
  if (errors) {
    toastErrors(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <ConnectionSelect onAdd={onAddConnection} register={register} />
      <div className="h-4" />
      <button type="submit" className="modalButtons">
        Send
      </button>
    </form>
  );
};
export default SendModal;