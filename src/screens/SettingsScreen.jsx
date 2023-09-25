import ApiHints from "@/components/ApiHints";
import NewApiButton from "@/components/buttons/NewApiButton";
import useApiHints from "@/hooks/use-api-hints";

const SettingsScreen = () => {
    const { data: apiHints } = useApiHints();
  return(
    <div className="flex flex-col space-y-4 p-4">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Settings</h3>
      <ApiHints apiHintData={apiHints} />
      <NewApiButton />
    </div>
  );
};
export default SettingsScreen;
