import { useMemo } from "react";
import Table from "@/components/Table";
import QueriesModal from "@/components/modals/new/QueriesModal";

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
    const res = await deleteQuery(existingQueryValues);
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
        <p className="mb-4">Are you sure you want to delete this query?</p>
        <p className="mb-4">name: "{existingQueryValues?.name}"</p>
        <p className="mb-4">id: "{existingQueryValues?.id}"</p>
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

const showEditQueryModal = async (row) => {
  const existingQueryValues = row?.original;
  if (!existingQueryValues?.id) return;
  const handleEditQueryModalSubmit = async (formData) => {
    const updatedData = { ...existingQueryValues, ...formData };
    const res = await updateQuery(updatedData);
    if (res.error) {
      console.error(res.error);
      return;
    }
    MySwal.close();
  };
  return MySwal.fire({
    title: "Edit Query",
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: "swal2-noanimation" },
    hideClass: { backdrop: "swal2-noanimation" },
    html: (
      <QueriesModal
        data={existingQueryValues}
        onSubmit={handleEditQueryModalSubmit}
      />
    ),
  });
};

const QueriesScreen = () => {
  const { data } = useQueries();
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
    <section className="w-full overflow-hidden">
      { data?.length > 0 ? (
        <Table
          name='Queries'
          columns={memoizedColumns}
          data={memoizedData}

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