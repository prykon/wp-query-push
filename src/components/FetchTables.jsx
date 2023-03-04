import { useEditor } from "@/hooks/use-editor";
import useTables from "@/hooks/use-tables";

const FetchTables = () => {
  const { setResultSet } = useEditor();
  const { data } = useTables();
  if (data) {
    setResultSet(data);
  };
  return null;
};
export default FetchTables;