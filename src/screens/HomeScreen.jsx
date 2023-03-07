import pkg from "@/../package.json";

const HomeScreen = () => {
  return(
    <div className="p-4">
      WP Query Push v{pkg.version}
    </div>
  );
};
export default HomeScreen;