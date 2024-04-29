import { CellSize, Patterns, Speed } from "../../features";
import "./css/settings.css";

const Settings = () => {
  return (
    <div className="div-settings">
      <Patterns />
      <CellSize />
      <Speed />
    </div>
  );
};
export default Settings;
