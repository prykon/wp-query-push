import pkg from "@/../package.json";
import { useMemo } from "react";
import Table from "@/components/Table";
import useQueries from "@/hooks/use-queries";
import { DeleteIcon, EditIcon } from "@/components/Icons";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
import { updateQuery, deleteQuery } from "@/api";
const MySwal = withReactContent(Swal);

const showDeleteQueryModal = async(row) => {
  const existingQueryValues = row?.original;
  if (!existingQueryValues?.id) return;
  const handleDeleteQueryModalSubmit = async() => {
    console.log(existingQueryValues);
    const res = await deleteQuery(existingQueryValues.id);
    if (res.error) {
      console.error(res.error);
      // TODO
      //toastErrors(res.error);
      return;
    };
    MySwal.close();
  };
  return MySwal.fire({
    title: 'Delete Query?',
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
    html: (
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4">{`Are you sure you want to delete query id: "${existingQueryValues?.id}"?`}</p>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={handleDeleteQueryModalSubmit}
        >
          Delete
        </button>
      </div>
    ), 
  });
};

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
                <button onClick={() => showEditQueryModal(row)}>
                  <EditIcon /> 
                </button>
              ),
            },
            {
              render: (row) => (
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => showDeleteQueryModal(row)}
                >
                  <DeleteIcon /> 
                </button>
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