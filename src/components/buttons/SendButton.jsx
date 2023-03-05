import SendModal from "@/components/modals/SendModal";
import ConnectionModal from "@/components/modals/new/ConnectionModal";

import { useEditor } from "@/hooks/use-editor";

import { createConnection, send } from "@/api";

import { toastErrors } from "@/helpers";

//import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const SendButton = () => {
  const { query, resultSet } = useEditor();
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
  const showSendModal = async({ connectionId }) => {
    return MySwal.fire({
      title: 'Send',
      showCloseButton: true,
      showConfirmButton: false,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
      html: (
        <SendModal
          connectionId={connectionId} 
          data={resultSet} 
          onAddConnection={showNewConnectionModal}
          onSubmit={handleSendModalSubmit}
        />
      ), 
    });
  };
  const handleConnectionModalSubmit = async(data) => {
    const connectionData = {
      name: data.name,
      type: data.type,
      requestData: {
        url: data.url,
        //method: data.method,
        headers: data.headers
      }
    };
    const res = await createConnection(connectionData);
    if (res.error) {
      console.error(res.error);
      return;
    };
    const connectionId = res.data.id; 
    await showSendModal({ connectionId });
  };
  const handleSendModalSubmit = async(data) => {
    data["query"] = query;
    const res = await send({ data });
    console.log("res", res);
    if (res.error) {
      console.error(res.error);
      // TODO
      //toastErrors(res.error);
      return;
    };
    MySwal.close();
  };
  return(
    <button
      onClick={showSendModal}
      className="buttons"
    >
      Send
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mt-2 ml-2 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
      </svg>
    </button>
  );
};
export default SendButton;