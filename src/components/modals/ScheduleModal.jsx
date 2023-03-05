import { useForm } from "react-hook-form";

import ConnectionSelect from "@/components/select/ConnectionSelect";
import IntervalSelect from "@/components/select/IntervalSelect";

import { toastErrors } from "@/helpers";

const ScheduleModal = ({
  connectionId,
  intervalId,
  onAddInterval,
  onAddConnection,
  onSubmit
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      connection: connectionId,
      interval: intervalId
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
      <label htmlFor="name">Name*</label>
      <input id="name" type="text" placeholder="Name" {...register("name")} className="modalFields p-2" />
      <label htmlFor="start_dt">Start DateTime</label>
      <input id="start_dt" type="datetime-local" placeholder="Start DateTime" {...register("start_dt", {})} className="modalFields p-2" />
      <IntervalSelect register={register} />
      <ConnectionSelect onAdd={onAddConnection} register={register} />
      <div className="h-4" />
      <button type="submit" className="modalButtons">
        Save
      </button>
    </form>
  );
};
export default ScheduleModal;