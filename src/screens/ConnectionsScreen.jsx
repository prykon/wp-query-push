import { useMemo } from "react";

import Table from "@/components/Table";
import ConnectionModal from "@/components/modals/new/ConnectionModal";

import { DeleteIcon, EditIcon } from "@/components/Icons";

import useConnections from "@/hooks/use-connections";

import { updateConnection, deleteConnection } from "@/api";

//import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const showEditConnectionModal = async(row) => {
  const existingConnectionValues = row?.original;
  if (!existingConnectionValues?.id) return;
  const config = JSON.parse(existingConnectionValues?.config);
  const defaultValues = {
    name: existingConnectionValues?.name,
    type: existingConnectionValues?.type,
    ...config
  };
  const handleEditConnectionModalSubmit = async(data) => {
    const res = await updateConnection({ id: existingConnectionValues.id, data });
    if (res.error) {
      console.error(res.error);
      // TODO
      //toastErrors(res.error);
      return;
    };
    MySwal.close();
  };
  return MySwal.fire({
    title: 'Edit Connection',
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
    html: (
      <ConnectionModal
        defaultValues={defaultValues}
        onSubmit={handleEditConnectionModalSubmit}
      />
    ), 
  });
};

const showDeleteConnectionModal = async(row) => {
  const existingConnectionValues = row?.original;
  if (!existingConnectionValues?.id) return;
  const handleDeleteConnectionModalSubmit = async() => {
    const res = await deleteConnection(existingConnectionValues.id);
    if (res.error) {
      console.error(res.error);
      // TODO
      //toastErrors(res.error);
      return;
    };
    MySwal.close();
  };
  return MySwal.fire({
    title: 'Delete Connection?',
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
    html: (
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4">{`Are you sure you want to delete connection: "${existingConnectionValues?.name}"?`}</p>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={handleDeleteConnectionModalSubmit}
        >
          Delete
        </button>
      </div>
    ), 
  });
};

const ConnectionsScreen = () => {
  const { data, error, isLoading, isValidating } = useConnections();
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
          name='Connections'
          columns={memoizedColumns}
          data={memoizedData}
          headerColor='#312E81'
          //actionButtons={<DownloadButton />}
          rowActionButtons={[
            {
              render: (row) => (
                <button onClick={() => showEditConnectionModal(row)}>
                  <EditIcon /> 
                </button>
              ),
            },
            {
              render: (row) => (
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => showDeleteConnectionModal(row)}
                >
                  <DeleteIcon /> 
                </button>
              ),
            },
          ]}
        />
      ) : (
        <div className="flex items-center justify-center h-96">
          <h1>No data to display</h1>
        </div>
      )}
    </section>
  );
};
export default ConnectionsScreen;