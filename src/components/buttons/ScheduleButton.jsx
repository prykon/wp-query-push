import ScheduleModal from "@/components/modals/ScheduleModal";
import ConnectionModal from "@/components/modals/new/ConnectionModal";

import { useEditor } from "@/hooks/use-editor";

import { createConnection, createSchedule } from "@/api";

//import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const ScheduleButton = () => {
  const { query } = useEditor();
  /*
  const showNewIntervalModal = async() => {
    return MySwal.fire({
      title: 'New Interval',
      showCloseButton: true,
      showConfirmButton: false,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
      html: (
        <IntervalModal
          onSubmit={handleIntervalModalSubmit}
        />
      ), 
    });
  };
  */
  const showNewConnectionModal = async() => {
    return MySwal.fire({
      title: 'New Connection',
      showCloseButton: true,
      showConfirmButton: false,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
      html: (
        <ConnectionModal
          onSubmit={handleConnectionModalSubmit}
        />
      ), 
    });
  };
  const showScheduleModal = async({ connectionId }={}) => {
    return MySwal.fire({
      title: 'New Schedule',
      showCloseButton: true,
      showConfirmButton: false,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
      html: (
        <ScheduleModal
          connectionId={connectionId} 
          //onAddInterval={showNewIntervalModal}
          onAddConnection={showNewConnectionModal}
          onSubmit={handleScheduleModalSubmit}
        />
      ), 
    });
  };
  const handleConnectionModalSubmit = async(data) => {
    const res = await createConnection({ connection: data });
    if (res.error) {
      console.error(res.error);
      return;
    };
    const connectionId = res.data.id; 
    await showScheduleModal({ connectionId });
  };
  const handleScheduleModalSubmit = async(data) => {
    data["query"] = query;
    const res = await createSchedule({ schedule: data });
    if (res.error) {
      console.error(res.error);
      return;
    };
    MySwal.close();
  };
  return(
    <button
      onClick={async() => {
        await showScheduleModal();
      }}
      className="buttons"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-1 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
      </svg>
      Schedule
    </button>
  );
};
export default ScheduleButton;