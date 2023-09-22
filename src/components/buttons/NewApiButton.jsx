import Button from "@/components/buttons/Button";
import { MySwal } from "@/helpers";
import { createApiKey } from "@/api";

const handleNewApiKeyModalSubmit = async () => {
  const res = await createApiKey();
  if (res.error) {
    console.error(res.error);
    return;
  }
  MySwal.close();
  return MySwal.fire({
    title: 'New Key Created Successfully',
    showCloseButton: true,
    showConfirmButton: false,
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
    html: (
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4">This key will never be shown again after closing this window.</p>
        <p className="mb-4">Please save it in a safe place.</p>
        <p className="mb-4">
          <small>
            <pre>{res.data}</pre>
          </small>
        </p>
      </div>
    ),
  });
};

const NewApiKeyButton = () => {
  const res = null;
  const showNewApiKeyModal = async () => {
    return MySwal.fire({
      title: 'New API Key',
      showCloseButton: true,
      showConfirmButton: false,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
      html: (
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4">Are you sure you want to create a new API key?</p>
          <Button
            label="Yes"
            onClick={() => handleNewApiKeyModalSubmit(showNewApiKeyModal)}
          />
        </div>
      ),
    });
  };

  return (
    <Button
      label="New API Key"
      onClick={() => showNewApiKeyModal()}
    />
  );
};

export default NewApiKeyButton;