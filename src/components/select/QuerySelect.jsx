import Select from "@/components/select/Select";

import useQueries from "@/hooks/use-queries";

const QuerySelect = ({ register, onAdd }) => {
  const {
    data: queries,
    error,
    isLoading,
    isValidating
  } = useQueries();


  if (isLoading) {
    return <div>Loading...</div>;
  };
  const mappedQueries = Object.entries(queries).map(([key, value]) => ({ id: value?.id, name: value?.name, query: value?.query}));
  /*
  if (error) {
    toastErrors(error);
  };
  */
  return (
    <Select
      id="query"
      label="Query*"
      values={mappedQueries}
      register={register}
      onAdd={onAdd}
    />
  );
};
export default QuerySelect;