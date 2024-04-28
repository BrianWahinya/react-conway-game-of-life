import CellSize from "./CellSize/CellSize";
import Mode from "./Mode/Mode";
import Patterns from "./Patterns/Patterns";
import Speed from "./Speed/Speed";
import "./css/controls.css";

const Controls = () => {
  return (
    <div className="div-controls">
      <Patterns />
      <Speed />
      <CellSize />
      <Mode />
    </div>
  );
};
export default Controls;
