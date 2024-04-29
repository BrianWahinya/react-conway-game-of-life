import { useRef, useLayoutEffect } from "react";
import {
  drawOnCanvas,
  generateRowsCols,
  checkConwayRules,
  generateArrPattern,
} from "../../helpers/utils";
import { useAppContext } from "../../context/AppContext";

import "./css/game.css";

const Game = () => {
  const { mode, pattern, speed, cellSize } = useAppContext();
  const canvasRef = useRef(null);
  let array = useRef([]);
  let rows = useRef(0);
  let cols = useRef(0);
  let ctx = useRef(null);

  const redraw = () => {
    const cvs = canvasRef.current;
    const {
      rows: canvasRows,
      cols: canvasCols,
      ctx: canvasCtx,
    } = generateRowsCols(cellSize, cvs);

    array.current = generateArrPattern(pattern, canvasRows, canvasCols);
    ctx.current = canvasCtx;
    rows.current = canvasRows;
    cols.current = canvasCols;
    // console.log("array", array.current, ctx, canvasCtx, rows, cols);
    if (array.current.length) {
      drawOnCanvas(array.current, canvasCtx, canvasRows, canvasCols, cellSize);
    }
  };

  useLayoutEffect(() => {
    const cvs = canvasRef.current;
    if (mode !== "play" && array.current.length < 1) {
      const {
        rows: canvasRows,
        cols: canvasCols,
        ctx: canvasCtx,
      } = generateRowsCols(cellSize, cvs);

      array.current = generateArrPattern(pattern, canvasRows, canvasCols);
      ctx.current = canvasCtx;
      rows.current = canvasRows;
      cols.current = canvasCols;
      // console.log("array", array.current, ctx, canvasCtx, rows, cols);
      if (array.current.length) {
        drawOnCanvas(
          array.current,
          canvasCtx,
          canvasRows,
          canvasCols,
          cellSize
        );
      }
      return;
    }

    if (mode !== "play" && array.current.length > 1) return;

    const func = () => {
      //   console.log("array2", array.current);
      array.current = checkConwayRules(
        array.current,
        rows.current,
        cols.current
      );
      drawOnCanvas(
        array.current,
        ctx.current,
        rows.current,
        cols.current,
        cellSize
      );
    };
    const timer = setInterval(func, speed);

    return () => clearInterval(timer);
  }, [speed, mode]);

  useLayoutEffect(() => {
    if (mode === "restart") {
      redraw();
    }
  }, [pattern, cellSize, mode]);

  return (
    <canvas ref={canvasRef} width={ctx.width} height={ctx.height}></canvas>
  );
};
export default Game;
