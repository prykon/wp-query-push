import { useForm } from "react-hook-form";

import AddButton from "@/components/buttons/AddButton";

import useConnections from "@/hooks/use-connections";

import { Toast } from "@/helpers";

import { isEmptyObject } from "@/utils";

const toastErrors = (errors) => {
  if (!isEmptyObject(errors)) {
    console.error(errors);
    (async () => {
      await Toast.fire({
        icon: 'error',
        title: JSON.stringify(errors)
      });
    })();
  };
};

const SendModal = ({
  connectionId,
  onAddConnection,
  onSubmit
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  if (errors) {
    toastErrors(errors);
  };
  const {
    data: connections,
    error,
    isLoading,
    isValidating
  } = useConnections();
  if (isLoading) {
    return <div>Loading...</div>;
  };
  if (error) {
    toastErrors(error);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <label htmlFor="connection">Connection*</label>
      <div className="flex flex-row space-x-2 mr-1">
        <select id="connection" {...register("connectionId", { required: true })} className="w-11/12">
          {connections?.map((connection) => (
            <option key={connection?.id} value={connection?.id}>{connection?.name}</option>
          ))}
        </select>
        <AddButton onClick={onAddConnection} />
      </div>
      <input type="submit" />
    </form>
  );
};
export default SendModal;