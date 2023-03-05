import React, { useMemo } from "react";

import Table from "@/components/Table";
import TableActions from "@/components/TableActions";

import { useEditor } from "@/hooks/use-editor";

//import Loader from "@/assets/loader.svg";

const TableSection = React.memo(() => {
  const { runtime, resultSet } = useEditor();
  const memoizedColumns = useMemo(() => {
    if (resultSet?.length > 0) {
      return Object?.keys(resultSet?.[0])?.map((key) => {
        return {
          Header: key,
          accessor: key,
        };
      });
    };
  }, [resultSet?.length]);
  const memoizedData = useMemo(() => resultSet, [resultSet?.length]);
  //<img src={Loader} className="w-20 mx-auto" alt="loader" />
  return (
    <section className="w-full my-12 overflow-hidden">
      { resultSet?.length > 0 ? (
        <Table
          columns={memoizedColumns}
          data={memoizedData}
          runtime={runtime}
          actionButtons={<TableActions />}
        />
      ) : (
        <div className="flex items-center justify-center h-96">
          <h1>No data to display</h1>
        </div>
      )}
    </section>
  );
});
export default TableSection;