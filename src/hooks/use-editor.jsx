import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const EditorContext = createContext(null);

const EditorProvider = React.memo(({ children }) => {
  const editor = useCustomEditor();
  return <EditorContext.Provider value={editor}>{children}</EditorContext.Provider>;
});

const useEditor = () => useContext(EditorContext);

const useCustomEditor = () => {
  const [query, setQuery] = useState(null);
  const [runtime, setRuntime] = useState(null);
  const [resultSet, setResultSet] = useState(null);
  const [isShowTables, setIsShowTables] = useState(false);
  return {
    query,
    runtime,
    resultSet,
    isShowTables,
    setQuery,
    setRuntime,
    setResultSet,
    setIsShowTables
  };
};

export { EditorProvider, useEditor };