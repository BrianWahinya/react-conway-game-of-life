import { useRef, useLayoutEffect, useEffect } from "react";
import { generateNestedArr, drawOnCanvas } from "../../helpers/utils";
import { useAppContext } from "../../context/AppContext";

import "./css/game.css";

const Game = () => {
  const { speed, cellSize, playing } = useAppContext();
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const cvs = canvasRef.current;
    if (!playing) {
      drawOnCanvas(cellSize, cvs);
      return;
    }
    const timer = setInterval(() => drawOnCanvas(cellSize, cvs), speed);
    return () => clearInterval(timer);
  }, [speed, cellSize, playing]);

  return <canvas ref={canvasRef}></canvas>;
};
export default Game;
