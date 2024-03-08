import React, { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";

import SaveButton from "@/components/buttons/SaveButton";

import { useEditor } from "@/hooks/use-editor";

const Editor = ({
  mode,
  defaultValue,
  placeholder,
  onSubmit,
  onClear,
  onSave,
  onShowTables,
  extraEditorActionButtons
}) => {
  const { query, setQuery } = useEditor();
  if (defaultValue && !query) {
    setQuery(defaultValue);
  };
  const onChange = (newValue) => {
    setQuery(newValue);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        if (onSubmit) {
          onSubmit(query);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [query, onSubmit]);
  return (
    <main className="w-full">
      <label htmlFor="editor">
        <AceEditor
          id="editor"
          aria-label="editor"
          mode={mode}
          theme="github"
          name="editor"
          fontSize={16}
          minLines={15}
          maxLines={15}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder={placeholder}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={query}
          onChange={onChange}
          showLineNumbers
        />
      </label>
      <div className="flex flex-row justify-between mt-1">
        <div className="flex flex-row space-x-4">
        { onSubmit && (
          <button
            onClick={() => onSubmit(query)}
            className="buttons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Run Query
          </button>
        )}
        { onClear && (
          <button
            onClick={onClear}
            className="buttons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 inline mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
            Clear 
          </button>
        )}
        {/* onSave && <SaveButton onSubmit={onSave} /> */}
        </div>
        { (onShowTables || extraEditorActionButtons) && (
          <div className="flex flex-row space-x-4">
            {onShowTables && (
              <button
                onClick={onShowTables}
                className="buttons"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 inline mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                </svg>
                Show Tables
              </button>
            )}
            {extraEditorActionButtons}
          </div>
        )}
      </div>
    </main>
  );
};
export default Editor;