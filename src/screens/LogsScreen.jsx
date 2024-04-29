import { useMemo } from "react";

import Table from "@/components/Table";
//import DownloadButton from "@/components/buttons/DownloadButton";

import useLogs from "@/hooks/use-logs";

const LogsScreen = () => {
  const { data, error, isLoading, isValidating } = useLogs();
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
  const memoizedData = useMemo(() => data, [data?.length]);
  return(
    <section className="w-full overflow-hidden">
      { data?.length > 0 ? (
        <Table
          name='Logs'
          columns={memoizedColumns}
          data={memoizedData}
          headerColor='bg-teal-500'
          //actionButtons={<DownloadButton />}
        />
      ) : (
        <div className="flex items-center justify-center h-96">
          <h1>No data to display</h1>
        </div>
      )}
    </section>
  );
};
export default LogsScreen;