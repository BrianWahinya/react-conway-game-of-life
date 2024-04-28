import { useAppContext } from "../../../context/AppContext";

const CellSize = () => {
  const { cellSize, changeCellSize } = useAppContext();
  return (
    <>
      <label htmlFor="cellsize">Cell Size: </label>
      <select
        id="cellsize"
        value={cellSize}
        onChange={(e) => changeCellSize(e.target.value)}
      >
        {/* <option value={10}>10</option> */}
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
    </>
  );
};
export default CellSize;
