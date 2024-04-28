import { Icon } from "../../../components";
import { useAppContext } from "../../../context/AppContext";

import "./css/mode.css";

const Mode = () => {
  const { mode, changeMode } = useAppContext();
  return (
    <>
      <button
        className="btn-mode btn-play-pause"
        onClick={() => changeMode(mode === "play" ? "pause" : "play")}
      >
        {mode === "play" ? <Icon type="pause" /> : <Icon type="play" />}
      </button>
      <button
        className="btn-mode btn-restart"
        onClick={() => mode !== "restart" && changeMode("restart")}
      >
        <Icon type="restart" />
      </button>
    </>
  );
};
export default Mode;
