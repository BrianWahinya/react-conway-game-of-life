import { Select } from "../../components";
import { useAppContext } from "../../context/AppContext";

const options = [
  { name: "Random", value: "random" },
  { name: "Alternate", value: "alternate" },
  { name: "Alternate-rectangle", value: "alternate-rectangle" },
  { name: "Square", value: "square" },
  { name: "Rectangle", value: "rectangle" },
];

const Patterns = () => {
  const { pattern, changePattern } = useAppContext();
  return (
    <Select
      id="pattern"
      name="Pattern:"
      options={options}
      value={pattern}
      onChange={(e) => changePattern(e.target.value)}
    />
  );
};
export default Patterns;
