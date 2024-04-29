import { Select } from "../../components";
import { useAppContext } from "../../context/AppContext";

const options = [
  { name: "0.5s", value: 500 },
  { name: "0.8s", value: 800 },
  { name: "1s", value: 1000 },
  { name: "1.5s", value: 1500 },
];

const Speed = () => {
  const { speed, adjustSpeed } = useAppContext();
  return (
    <Select
      id="speed"
      name="Speed"
      options={options}
      value={speed}
      onChange={(e) => adjustSpeed(e.target.value)}
    />
  );
};
export default Speed;
