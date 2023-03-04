import React, {
  createContext,
  useContext,
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
  return {
    query,
    runtime,
    resultSet,
    setQuery,
    setRuntime,
    setResultSet
  };
};

export { EditorProvider, useEditor };