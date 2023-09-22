import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import HomeScreen from "@/screens/HomeScreen";
import EditorScreen from "@/screens/EditorScreen";
import ConnectionsScreen from "@/screens/ConnectionsScreen";
import LogsScreen from "@/screens/LogsScreen";
import SettingsScreen from "@/screens/SettingsScreen";

const AppNavigator = () => (
  <div className="flex-col h-full w-full m-auto p-12">
  <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Editor</Tab>
      <Tab>Connections</Tab>
      <Tab>Logs</Tab>
      <Tab>Settings</Tab>
    </TabList>
    <TabPanel>
      <HomeScreen />
    </TabPanel>
    <TabPanel>
      <EditorScreen />
    </TabPanel>
    <TabPanel>
      <ConnectionsScreen />
    </TabPanel>
    <TabPanel>
      <LogsScreen />
    </TabPanel>
    <TabPanel>
      <SettingsScreen />
    </TabPanel>
  </Tabs>
  </div>
);
export default AppNavigator;
