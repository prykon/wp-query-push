import { useState } from "react";

import { downloadFile } from "@/helpers";
import { json2csvAsync } from "json-2-csv";

//import { exportToJson } from "@/helpers";
//import CsvDownload from "react-json-to-csv";

const exportCSV = async(data) => {
  const csvData = await json2csvAsync(data);
  return downloadFile({
    data: csvData,
    fileName: "Untitled.csv",
    fileType: "text/csv"
  });
};

const exportJSON = (data) => downloadFile({
  data: JSON.stringify(data),
  fileName: "Untitled.json",
  fileType: "text/json",
});

const DownloadModal = ({ data }) => {
  const [type, setType] = useState("csv");
  const onSubmit = () => {
    if (!data) {
      // TOAST ERROR
      return;
    };
    if (type === "csv") {
      exportCSV(data);
    };
    if (type === "json") {
      exportJSON(data);
    };
    return;
  };
  return (
    <div className="flex flex-col space-y-4">
      <select
        id="type"
        value={type}
        onChange={(evt) => setType(evt.target.value)}
        className="modalFields w-full py-2"
      >
        <option key="1" value="csv">CSV</option>
        <option key="2" value="json">JSON</option>
      </select>
      <div className="h-4" />
      <button type="button" onClick={onSubmit} className="modalButtons">Download</button>
    </div>
  );
};
export default DownloadModal;