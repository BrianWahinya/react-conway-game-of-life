import { useAppContext } from "../../context/AppContext";
import "./css/controls.css";

const Controls = () => {
  const {
    speed,
    cellSize,
    playing,
    adjustSpeed,
    changeCellSize,
    changeGameStatus,
  } = useAppContext();

  const changeSize = (e) => {
    const val = e.target.value;
    if (val) {
      changeCellSize(val);
    }
  };
  const changeSpeed = (e) => {
    const val = e.target.value;
    if (val) {
      adjustSpeed(val);
    }
  };

  return (
    <div className="div-controls">
      <label htmlFor="speed">Speed: </label>
      <select id="speed" value={speed} onChange={changeSpeed}>
        <option value={500}>0.5s</option>
        <option value={800}>0.8s</option>
        <option value={1000}>1s</option>
        <option value={1500}>1.5s</option>
      </select>
      <label htmlFor="cellsize">Cell Size: </label>
      <select id="cellsize" value={cellSize} onChange={changeSize}>
        {/* <option value={10}>10</option> */}
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      <button onClick={changeGameStatus}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};
export default Controls;
