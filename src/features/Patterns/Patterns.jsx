import { useAppContext } from "../../context/AppContext";

const Patterns = () => {
  const { pattern, changePattern } = useAppContext();
  return (
    <>
      <label htmlFor="pattern">Pattern: </label>
      <select
        id="pattern"
        value={pattern}
        onChange={(e) => changePattern(e.target.value)}
      >
        <option value="random">Random</option>
        <option value="alternate">Alternate</option>
        <option value="alternate-rectangle">Alternate Rectangle</option>
        <option value="square">Square</option>
        <option value="rectangle">Rectangle</option>
      </select>
    </>
  );
};
export default Patterns;
