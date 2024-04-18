import Select from "@/components/select/Select";

import useIntervals from "@/hooks/use-intervals";

const IntervalSelect = ({ register, onAdd, disabled=false }) => {
  const {
    data: intervals,
    error,
    isLoading,
    isValidating
  } = useIntervals();
  if (isLoading) {
    return <div>Loading...</div>;
  };
  const mappedIntervals = Object.entries(intervals).map(([key, value]) => ({ id: key, name: value?.display }));
  /*
  if (error) {
    toastErrors(error);
  };
  */
  return(
    <Select
      id="interval"
      label="Interval*"
      values={mappedIntervals}
      register={register}
      onAdd={onAdd}
      disabled={disabled}
    />
  );
};
export default IntervalSelect;