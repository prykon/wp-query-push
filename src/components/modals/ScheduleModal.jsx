import { useForm } from "react-hook-form";

import AddButton from "@/components/buttons/AddButton";

import useIntervals from "@/hooks/use-intervals";
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

const ScheduleModal = ({
  connectionId,
  onAddConnection,
  onSubmit
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  if (errors) {
    toastErrors(errors);
  };
  const {
    data: intervals,
    error: intervalsError,
    isLoading: intervalsLoading,
    isValidating: intervalsValidating
  } = useIntervals();
  const {
    data: connections,
    error: connectionsError,
    isLoading: connectionsLoading,
    isValidating: connectionsValidating
  } = useConnections();
  const dataError = intervalsError || connectionsError;
  const dataLoading = intervalsLoading || connectionsLoading;
  if (dataLoading) {
    return <div>Loading...</div>;
  };
  /*
  const dataValidating = intervalsValidating || connectionsValidating;
  if (dataValidating) {
    return <div>Validating...</div>;
  };
  */
  if (dataError) {
    toastErrors(dataError);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <label htmlFor="name">Name*</label>
      <input id="name" type="text" placeholder="Name" {...register("name")} />
      <label htmlFor="start_dt">Start DateTime</label>
      <input id="start_dt" type="datetime-local" placeholder="Start DateTime" {...register("start_dt", {})} />
      <label htmlFor="interval">Interval*</label>
      <div className="flex flex-row space-x-2 mr-1">
        <select id="interval" {...register("interval", { required: true })} className="w-11/12">
          {Object.entries(intervals).map(([key, value]) => (
            <option key={key} value={value?.interval}>{value?.display}</option>
          ))}
        </select>
        <AddButton onClick={()=>console.log("*** ON ADD INTERVAL ***")} />
      </div>
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
export default ScheduleModal;