import { useAppContext } from "../../../context/AppContext";

const Mode = () => {
  const { changeMode } = useAppContext();
  return (
    <>
      <button onClick={() => changeMode("restart")}>Restart</button>
      <button onClick={() => changeMode("play")}>Play</button>
      <button onClick={() => changeMode("pause")}>Pause</button>
    </>
  );
};
export default Mode;
