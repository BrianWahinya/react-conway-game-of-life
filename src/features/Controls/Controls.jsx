import { useAppContext } from "../../context/AppContext";
import CellSize from "../CellSize/CellSize";
import Patterns from "../Patterns/Patterns";
import Speed from "../Speed/Speed";
import "./css/controls.css";

const Controls = () => {
  const { playing, playMode } = useAppContext();

  return (
    <div className="div-controls">
      <Patterns />
      <Speed />
      <CellSize />

      <button onClick={() => playMode(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};
export default Controls;
