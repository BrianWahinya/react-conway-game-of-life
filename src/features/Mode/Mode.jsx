import { Button, Icon } from "../../components";
import { useAppContext } from "../../context/AppContext";

import "./css/mode.css";

const Mode = () => {
  const { mode, changeMode } = useAppContext();
  return (
    <div className="div-mode">
      <Button
        className="btn-mode btn-play-pause"
        onClick={() => changeMode(mode === "play" ? "pause" : "play")}
        name={mode === "play" ? <Icon type="pause" /> : <Icon type="play" />}
      />
      <Button
        className="btn-mode btn-restart"
        onClick={() => mode !== "restart" && changeMode("restart")}
        name={<Icon type="restart" />}
      />
    </div>
  );
};
export default Mode;
