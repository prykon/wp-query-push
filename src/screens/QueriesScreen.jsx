import pkg from "@/../package.json";
import { useMemo } from "react";
import Table from "@/components/Table";
import useQueries from "@/hooks/use-queries";

const QueriesScreen = () => {
  const { data, error, isLoading, isValidating } = useQueries();
  const memoizedColumns = useMemo(() => {
    if (data?.length > 0) {
      return Object?.keys(data?.[0])?.map((key) => {
        return {
          Header: key,
          accessor: key,
        };
      });
    };
  }, [data]);
  const memoizedData = useMemo(() => data, [data]);
  return(
    <section className="w-full my-12 overflow-hidden">
      { data?.length > 0 ? (
        <Table
          columns={memoizedColumns}
          data={memoizedData}
          //actionButtons={<DownloadButton />}
          rowActionButtons={[
            {
              render: (row) => (
                <p>Edit</p>
              ),
            },
            {
              render: (row) => (
                <p>Delete</p>
              ),
            },
          ]}
        />
      ) : (
        <div className="flex items-center justify-center h-96">
          <h1>No queries to display</h1>
        </div>
      )}
    </section>
  );
};
export default QueriesScreen;