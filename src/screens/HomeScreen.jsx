import pkg from "@/../package.json";

import Changelog from "@/components/Changelog";

const HomeScreen = () => {
  const changelogData = [
    {
      version: "0.8",
      changes: [
        "Queries and Cron Events tabs",
        "Added endpoints",
        "Misc UI improvements"
      ]
    },
    {
      version: "0.7",
      changes: [
        "Support WP Instances installed in subdirectories"
      ]
    },
    {
      version: "0.6",
      changes: [
        "Developer API",
        "Create tables on-demand (improved multisite support)"
      ]
    },
    {
      version: "0.5",
      changes: [
        "Multisite Support"
      ]
    },
    {
      version: "0.4",
      changes: [
        "Editable Connections",
        "WP Query Push specific nonce",
        "Introduce changelog",
      ]
    },
    {
      version: "0.3",
      changes: [
        "Plugin auto-update",
      ]
    },
    {
      version: "0.2",
      changes: [
        "Modal to display truncated table values",
      ]
    },
    {
      version: "0.1",
      changes: [
        "Initial release",
      ]
    },
  ];
  return(
    <div className="flex flex-col space-y-4 p-4">
      <h3 className="text-lg leading-6 font-medium text-gray-900">WP Query Push v{pkg.version}</h3>
      <Changelog changelogData={changelogData} />
    </div>
  );
};
export default HomeScreen;
