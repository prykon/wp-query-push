import { useState } from "react";

import Editor from "@/components/Editor";
import FetchTables from "@/components/FetchTables";

import { useEditor } from "@/hooks/use-editor";

import { MySwal } from "@/helpers";

import { runQuery } from "@/api";

const SQLEditor = () => {
  const { query, setQuery, setRuntime, setResultSet } = useEditor();
  const [fetchTables, setFetchTables] = useState(false);
  //const defaultValue = "SELECT * FROM wp_options;"; 
  const placeholder = "SELECT * FROM wp_options;";
  const onClear = () => {
    setQuery('');
    setRuntime(null);
    setResultSet(null);
    setFetchTables(false);
  };
  return(
    <>
      <Editor
        mode="mysql"
        //defaultValue={defaultValue}
        placeholder={placeholder}
        onSubmit={async(query)=> {
          onClear();
          setQuery(query);
          const { data, error } = await runQuery({ query });
	  console.log("data: ", data);
	  console.log("error: ", error);
          if (data && !error) {
            setRuntime(42.4211118);
            setResultSet(data);
          };
        }}
        onClear={onClear}
        onSave={async(data) => {
          data["query"] = query;
          console.log("*** ON SAVE QUERY: ", data);
          // if successs, close modal, display success toast
          // if error, leave modal open, display error toast
          MySwal.close();
        }}
        onShowTables={() => {
          onClear();
          setFetchTables(true);
        }}
        /*
        extraEditorActionButtons={(
          <>
            <button>Something else</button>
          </>
        )}
        */
      />
      { fetchTables && (
        <FetchTables />
      )}
    </>
  );
};
export default SQLEditor;
