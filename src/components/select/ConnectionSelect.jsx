import Select from "@/components/select/Select";

import useConnections from "@/hooks/use-connections";

const ConnectionSelect = ({ register, onAdd }) => {
  const {
    data: connections,
    error,
    isLoading,
    isValidating
  } = useConnections();
  if (isLoading) {
    return <div>Loading...</div>;
  };
  /*
  if (error) {
    toastErrors(error);
  };
  */
  return(
    <Select
      id="connection"
      label="Connection*"
      values={connections}
      register={register}
      onAdd={onAdd}
    />
  );
};
export default ConnectionSelect;