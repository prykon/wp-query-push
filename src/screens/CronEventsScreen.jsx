import { useMemo } from "react";
import Table from "@/components/Table";
import CronEventsModal from "@/components/modals/new/CronEventsModal";
import { EditIcon, DeleteIcon, RunIcon } from "@/components/Icons";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
import useCronEvents from "@/hooks/use-cron-events";
import { updateCronEvent, deleteCronEvent, runCronEvent } from "@/api";

const MySwal = withReactContent(Swal);

const showDeleteCronEventModal = async (row) => {
  const existingCronEventValues = row?.original;
  if (!existingCronEventValues?.id) return;
  const handleDeleteCronEventModalSubmit = async() => {
    const res = await deleteCronEvent(existingCronEventValues.id);
    if (res.error) {
      console.error(res.error);
      // TODO
      //toastErrors(res.error);
      return;
    };
    MySwal.close();
  };
  return MySwal.fire({
    title: 'Delete Cron Event?',
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
    html: (
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4">{`Are you sure you want to delete cron event: "${existingCronEventValues?.id}"?`}</p>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={handleDeleteCronEventModalSubmit}
        >
          Delete
        </button>
      </div>
    ),
  });
};

const showEditCronEventModal = async (row) => {
  const existingCronEventValues = row?.original;
  if (!existingCronEventValues?.id) return;
  const handleEditCronEventModalSubmit = async (formData) => {
    const updatedData = { ...existingCronEventValues, ...formData };
    const res = await updateCronEvent(updatedData);
    if (res.error) {
      console.error(res.error);
      return;
    }
    MySwal.close();
  };
  return MySwal.fire({
    title: "Edit Cron Event",
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: "swal2-noanimation" },
    hideClass: { backdrop: "swal2-noanimation" },
    html: (
      <CronEventsModal
        data={existingCronEventValues}
        onSubmit={handleEditCronEventModalSubmit}
      />
    ),
  });
};

const showRunCronEventModal = async (row) => {
  const existingCronEventValues = row?.original;
  if (!existingCronEventValues?.id) return;
  const handleRunCronEventModalSubmit = async() => {
    const res = await runCronEvent(existingCronEventValues);
    if (res.error) {
      console.error(res.error);
      // TODO
      //toastErrors(res.error);
      return;
    };
    MySwal.close();
  };
  return MySwal.fire({
    title: 'Run Cron Event?',
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
    html: (
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4">{`Are you sure you want to run cron event: "${existingCronEventValues?.id}"?`}</p>
        <p className="mb-4">(This will not affect the run schedule)</p>
        <button
          className="modalButtons"
          onClick={handleRunCronEventModalSubmit}
        >
          Run
        </button>
      </div>
    ),
  });
};

const CronEventsScreen = () => {
  const { data } = useCronEvents();
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
          columns={memoizedColumns}
          data={memoizedData}

          rowActionButtons={[
            {
              render: (row) => (
                <button onClick={() => showRunCronEventModal(row)}>
                  <RunIcon />
                </button>
              ),
            },
            {
              render: (row) => (
                <button onClick={() => showEditCronEventModal(row)}>
                  <EditIcon /> 
                </button>
              ),
            },
            {
              render: (row) => (
                <button onClick={() => showDeleteCronEventModal(row)}
                  className="text-red-500 hover:text-red-600">
                  <DeleteIcon />
                </button>
              ),
            },
          ]}
        />
      ) : (
        <div className="flex items-center justify-center h-96">
          <h1>No cron events to display</h1>
        </div>
      )}
    </section>
  );
};
export default CronEventsScreen;