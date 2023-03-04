import ScheduleButton from "@/components/buttons/ScheduleButton";
import DownloadButton from "@/components/buttons/DownloadButton";
import SendButton from "@/components/buttons/SendButton";

const TableActions = () => {
  return(
    <div className="flex flex-row space-x-4 mb-1">
      <ScheduleButton />
      <DownloadButton />
      <SendButton />
    </div>
  );
};
export default TableActions;