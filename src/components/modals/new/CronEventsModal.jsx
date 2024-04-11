import { useForm } from "react-hook-form";
import ConnectionSelect from "@/components/select/ConnectionSelect";
import IntervalSelect from "@/components/select/IntervalSelect";
import QuerySelect from "@/components/select/QuerySelect";

const CronEventsModal = ({ data, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm( {
    defaultValues: {
        query: data.query_id,
        connection: data.connection_id,
        interval: data.interval
      }
    }
    );

  const handleFormSubmit = async (formData) => {
    const updatedData = {
      ...data,
      query: formData.query,
      connection_id: formData.connection,
      schedule: formData.schedule,
      interval: formData.interval,
      query_id: formData.id
      };
    await onSubmit(updatedData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col space-y-4"
    >
      <QuerySelect register={register} defaultValue={data.query_id} />
      <IntervalSelect register={register} />
      <ConnectionSelect register={register} />
      {errors.connection?.type === 'required' && <p role="alert" className="text-red-400 font-medium">Connection is required</p>}
      <div className="h-4" />
      <button type="submit" className="modalButtons">
        Save
      </button>
    </form>
  );
};

export default CronEventsModal;
