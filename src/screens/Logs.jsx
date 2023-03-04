import { useMemo } from "react";

import Table from "@/components/Table";

import useLogs from "@/hooks/use-logs";

const Logs = () => {
  const { data, error, isLoading, isValidating } = useLogs();
  console.log("*** LOGS DATA: ", data);
  const memoizedColumns = useMemo(() => {
    if (data?.length > 0) {
      return Object?.keys(data?.[0])?.map((key) => {
        return {
          Header: key,
          accessor: key,
        };
      });
    };
  }, [data?.length]);
  console.log("*** MEMOIZED COLUMNS: ", memoizedColumns);
  const memoizedData = useMemo(() => data, [data?.length]);
  return(
    <section className="w-full my-12 overflow-hidden">
      { data && (
        <Table
          columns={memoizedColumns}
          data={memoizedData}
        />
      )}
    </section>
  );
};
export default Logs;