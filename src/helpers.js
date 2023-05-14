//import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
// TODO: rename to "Modal" or "Alert" ?
export const MySwal = withReactContent(Swal);

import { isEmptyObject } from "@/utils";

export const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });

  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

export const fetcher = (resource, init) => fetch(resource, {
  method: "GET",
  credentials: "include",
  headers: {
    "Accept": "application/json",
    "X-WP-Nonce": wpApiSettings.nonce
  }
}, init).then(res => res?.json());

export const post = async(url, body) => {
  const headers = {
    "Accept": "application/json",
    "X-WP-Nonce": wpApiSettings.nonce
  };
  // TODO: overkill?
  if (JSON.parse(JSON.stringify(body))) {
    headers["Content-Type"] = "application/json";
  };
  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers,
    body
  });
  // HTTP 200 bc we are at least returning the new ID
  if (res.status === 200) {
    const data = await res.json();
    return {
      data,
      error: null
    };
  };
  // TODO
  return {
    data: null,
    error: "Server Error"
  };
};

export const put = async(url, body) => {
  const headers = {
    "Content-Type": "application/json",
    "X-WP-Nonce": wpApiSettings.nonce
  };
  const res = await fetch(url, {
    method: "PUT",
    credentials: "include",
    headers,
    body
  });
  if (res.status === 204) {
    return {
      data: null,
      error: null
    };
  };
  return {
    data: null,
    error: "Server Error"
  };
};

export const delet = async(url) => {
  const headers = {
    "X-WP-Nonce": wpApiSettings.nonce
  };
  const res = await fetch(url, {
    method: "DELETE",
    credentials: "include",
    headers,
  });
  if (res.status === 204) {
    return {
      data: null,
      error: null
    };
  };
  return {
    data: null,
    error: "Server Error"
  };
};

export const toastErrors = (errors) => {
  if (!isEmptyObject(errors)) {
    console.error(errors);
    (async () => {
      await Toast.fire({
        icon: 'error',
        title: JSON.stringify(errors)
      });
    })();
  };
};
