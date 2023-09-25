import React from 'react';
import { DeleteIcon } from "@/components/Icons";
import { deleteApiKey } from "@/api";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showDeleteApiKeyModal = async (apiHint) => {
  const handleDeleteApiKeyModalSubmit = async () => {
    const res = await deleteApiKey(apiHint);
    if (res.error) {
      console.error(res.error);
      return;
    }
    MySwal.close();
  };

  return MySwal.fire({
    title: 'Delete API Key?',
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
    html: (
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4">***************************{apiHint}</p>
        <p className="mb-4">Are you sure you want to delete this API key?</p>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={handleDeleteApiKeyModalSubmit}
        >
          Delete
        </button>
      </div>
    ),
  });
};

const ApiHints = ({ apiHintData }) => {
  if (!apiHintData) {
    return <p>Loading keys...</p>;
  }

  if (Object.keys(apiHintData).length === 0) {
    return <p>No API keys found.</p>;
  }
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 text-gray-900">Api Keys</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {apiHintData.map((apiHint, index) => (
            <div
              className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              style={{ display: 'flex', alignItems: 'center' }}
            >
                <dt className="text-sm font-medium text-gray-500">
                    <pre>***************************{apiHint}</pre>
                </dt>
                <dd>
                    <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => showDeleteApiKeyModal(apiHint)}
                    >
                        <DeleteIcon /> 
                    </button>
                </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ApiHints;
