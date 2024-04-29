import { Mode } from "../../features";
import Settings from "../Settings/Settings";
import "./css/controls.css";

const Controls = () => {
  return (
    <div className="div-controls">
      <Settings />
      <Mode />
    </div>
  );
};
export default Controls;
