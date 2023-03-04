import SaveModal from "@/components/modals/new/SaveModal";

import { MySwal } from "@/helpers";

const SaveButton = ({ onSubmit }) => {
  const showSaveModal = async() => {
    return MySwal.fire({
      title: 'Save Query',
      showCloseButton: true,
      showConfirmButton: false,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
      html: <SaveModal onSubmit={onSubmit} />
    });
  };
  return(
    <button onClick={showSaveModal}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M12.5 0H5.914a1.5 1.5 0 0 0-1.06.44L2.439 2.853A1.5 1.5 0 0 0 2 3.914V14.5A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0Zm-7 2.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2.75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0Zm1.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"/>
      </svg>
      Save
    </button>
  );
};
export default SaveButton;