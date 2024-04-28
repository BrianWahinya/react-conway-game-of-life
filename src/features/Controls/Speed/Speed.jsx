import { useAppContext } from "../../../context/AppContext";

const Speed = () => {
  const { speed, adjustSpeed } = useAppContext();
  return (
    <>
      <label htmlFor="speed">Speed: </label>
      <select
        id="speed"
        value={speed}
        onChange={(e) => adjustSpeed(e.target.value)}
      >
        <option value={500}>0.5s</option>
        <option value={800}>0.8s</option>
        <option value={1000}>1s</option>
        <option value={1500}>1.5s</option>
      </select>
    </>
  );
};
export default Speed;
