import { useRef, useLayoutEffect } from "react";
import { generateNestedArr } from "../../helpers/utils";
import { useAppContext } from "../../context/AppContext";

import "./css/game.css";

const Game = () => {
  const { cellSize } = useAppContext();
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");
    // const { width, height } = cvs;

    const dpr = window.devicePixelRatio || 1;
    const rect = cvs.getBoundingClientRect();
    cvs.width = rect.width * dpr;
    cvs.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const { width, height } = cvs;

    const rows = Math.floor(height / cellSize);
    const cols = Math.floor(width / cellSize);
    console.log({ rows, cols });
    const array = generateNestedArr(rows, cols);
    // console.log("array", array);

    for (let i = 0; i < rows - 1; i++) {
      for (let j = 0; j < cols - 1; j++) {
        const x = j * cellSize;
        const y = i * cellSize;
        ctx.fillStyle = array[i][j] ? "black" : "white";
        ctx.fillRect(x, y, cellSize, cellSize);
        ctx.strokeStyle = "grey";
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }
  }, [cellSize]);
  return <canvas ref={canvasRef}></canvas>;
};
export default Game;
