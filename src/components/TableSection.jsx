import React, { useMemo, useState } from "react";

import Table from "@/components/Table";
import TableActions from "@/components/TableActions";

import { useEditor } from "@/hooks/use-editor";

//import Loader from "@/assets/loader.svg";

const TableSection = React.memo(() => {
  const { runtime, resultSet } = useEditor();
  const memoizedColumns = useMemo(() => {
    //if (!resultSet?.[0].length) return [];
    if (resultSet?.length > 0) {
      return Object?.keys(resultSet?.[0])?.map((key) => {
        return {
          Header: key,
          accessor: key,
        };
      });
    };
  }, [resultSet?.length]);
  //console.log("*** MEMOIZED COLUMNS: ", memoizedColumns);
  const memoizedData = useMemo(() => resultSet, [resultSet?.length]);
  //console.log("*** MEMOIZED DATA: ", memoizedData);
  //if (!runtime) return null;
  //<img src={Loader} className="w-20 mx-auto" alt="loader" />
  return (
    <section className="w-full my-12 overflow-hidden">
      { resultSet && (
        <Table
          columns={memoizedColumns}
          data={memoizedData}
          runtime={runtime}
          actionButtons={<TableActions />}
        />
      )}
    </section>
  );
});

export default TableSection;