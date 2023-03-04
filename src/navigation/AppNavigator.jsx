import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import HomeScreen from "@/screens/HomeScreen";
import EditorScreen from "@/screens/EditorScreen";
import LogsScreen from "@/screens/LogsScreen";

const AppNavigator = () => (
  <div className="flex-col h-full w-full m-auto p-12">
  <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Editor</Tab>
      <Tab>Logs</Tab>
    </TabList>
    <TabPanel>
      <HomeScreen />
    </TabPanel>
    <TabPanel>
      <EditorScreen />
    </TabPanel>
    <TabPanel>
      <LogsScreen />
    </TabPanel>
  </Tabs>
  </div>
);
export default AppNavigator;
