//import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
// TODO: rename to "Modal" or "Alert" ?
export const MySwal = withReactContent(Swal);

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
}, init).then(res => res.json());

export const post = async(url, body) => {
      const headers = {
        "Accept": "application/json",
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