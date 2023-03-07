import { useState } from "react";

import Editor from "@/components/Editor";
import FetchTables from "@/components/FetchTables";

import { useEditor } from "@/hooks/use-editor";

import { MySwal } from "@/helpers";

import { runQuery } from "@/api";

const SQLEditor = () => {
  const {
    query,
    isShowTables,
    setQuery,
    setRuntime,
    setResultSet,
    setIsShowTables
  } = useEditor();
  //const [fetchTables, setFetchTables] = useState(false);
  //const defaultValue = "SELECT * FROM wp_options;"; 
  const placeholder = "SELECT * FROM wp_options;";
  const onClear = () => {
    setQuery('');
    setRuntime(null);
    setResultSet(null);
    //setFetchTables(false);
    setIsShowTables(false);
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
          if (data && !error) {
            setRuntime(42.4211118);
            setResultSet(data);
          };
        }}
        onClear={onClear}
        onSave={async(data) => {
          data["query"] = query;
          // if successs, close modal, display success toast
          // if error, leave modal open, display error toast
          MySwal.close();
        }}
        onShowTables={() => {
          onClear();
          setIsShowTables(true);
          //setFetchTables(true);
        }}
        /*
        extraEditorActionButtons={(
          <>
            <button>Something else</button>
          </>
        )}
        */
      />
      { isShowTables && (
        <FetchTables />
      )}
    </>
  );
};
export default SQLEditor;
