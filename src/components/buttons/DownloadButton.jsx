import DownloadModal from "@/components/modals/DownloadModal";

import { useEditor } from "@/hooks/use-editor";

//import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const DownloadButton = () => {
  const { resultSet } = useEditor();
  const showDownloadModal = async() => {
    return MySwal.fire({
      title: 'Download',
      showCloseButton: true,
      showConfirmButton: false,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
      html: <DownloadModal data={resultSet} />, 
    });
  };
  return(
    <button
      onClick={showDownloadModal}
      className="buttons"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-1 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
      </svg>
      Download 
    </button>
  );
  /*
  return(
    <CsvDownload
      className="bg-primary-dark hover:bg-secondary-dark transition-colors text-white rounded-md font-semibold shadow-lg"
      data={completeData}
      //filename={`${query}.csv`}
      filename={`${"2023-02-17"}.csv`}
      delimiter=','
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>{" "}
      CSV
    </CsvDownload>
  );
  */
};
export default DownloadButton;