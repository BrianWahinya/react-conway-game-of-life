import { useRef, useLayoutEffect } from "react";
import {
  generateNestedArr,
  drawOnCanvas,
  generateRowsCols,
  checkConwayRules,
} from "../../helpers/utils";
import { useAppContext } from "../../context/AppContext";

import "./css/game.css";

const Game = () => {
  const { speed, cellSize, playing, playMode } = useAppContext();
  const canvasRef = useRef(null);
  let array = useRef([]);
  let rows = useRef(0);
  let cols = useRef(0);
  let ctx = useRef(null);

  useLayoutEffect(() => {
    const cvs = canvasRef.current;
    if (!playing && array.current.length < 1) {
      const {
        rows: canvasRows,
        cols: canvasCols,
        ctx: canvasCtx,
      } = generateRowsCols(cellSize, cvs);

      array.current = generateNestedArr(rows.current, cols.current);
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

    if (!playing && array.current.length > 1) return;

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
  }, [speed, playing]);

  useLayoutEffect(() => {
    playMode(false);

    const cvs = canvasRef.current;
    const {
      rows: canvasRows,
      cols: canvasCols,
      ctx: canvasCtx,
    } = generateRowsCols(cellSize, cvs);

    array.current = generateNestedArr(canvasRows, canvasCols);
    ctx.current = canvasCtx;
    rows.current = canvasRows;
    cols.current = canvasCols;
    // console.log("array", array.current, ctx, canvasCtx, rows, cols);
    if (array.current.length) {
      drawOnCanvas(array.current, canvasCtx, canvasRows, canvasCols, cellSize);
    }
  }, [cellSize]);

  return <canvas ref={canvasRef}></canvas>;
};
export default Game;
