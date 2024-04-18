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
      interval: formData.interval,
      };
    await onSubmit(updatedData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col space-y-4"
    >
      <QuerySelect register={register} defaultValue={data.query_id} />
      <label htmlFor="start_dt">Start DateTime</label>
      <input id="start_dt" type="datetime-local" placeholder="Start DateTime" {...register("start_dt", {})} className="modalFields p-2" disabled/>
      <IntervalSelect register={register} disabled={true}/>
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
