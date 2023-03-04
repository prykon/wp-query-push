import { EditorProvider } from "@/hooks/use-editor";
import SQLEditor from "@/components/SQLEditor";
import TableSection from "@/components/TableSection";

const EditorScreen = () => {
  return(
    <EditorProvider>
      <SQLEditor />
      <TableSection />
    </EditorProvider>
  );
};
export default EditorScreen;