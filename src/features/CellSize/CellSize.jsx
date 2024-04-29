import { Select } from "../../components";
import { useAppContext } from "../../context/AppContext";

const options = [
  { name: "20", value: 20 },
  { name: "30", value: 30 },
  { name: "50", value: 50 },
];

const CellSize = () => {
  const { cellSize, changeCellSize } = useAppContext();
  return (
    <Select
      id="cellsize"
      name="Cell Size"
      options={options}
      value={cellSize}
      onChange={(e) => changeCellSize(e.target.value)}
    />
  );
};
export default CellSize;
