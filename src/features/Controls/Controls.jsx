import { useAppContext } from "../../context/AppContext";
import "./css/controls.css";

const Controls = () => {
  const { cellSize, changeCellSize } = useAppContext();

  const changeSize = (e) => {
    const val = e.target.value;
    if (val) {
      changeCellSize(val);
    }
  };

  return (
    <div className="div-controls">
      <label htmlFor="cellsize">Cell Size: </label>
      <select id="cellsize" value={cellSize} onChange={changeSize}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};
export default Controls;
