import React from "react";
import Board from "./Board";
import { useState } from "react";
import Win from "./Win";
import Square from "./Square";
import { useEffect } from "react";
export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isBlinking, setIsBlinking] = useState(false);
  const [IsNext, setIsNext] = useState(true);
  // const [isDraw, setIsDraw] = useState(false);
  const winner = Win(board);
  const winningSquares = winner ? winner.winningSquares : [];
  const startNewGame = () => {
    return (
      <button
        className={`py-5 text-md  text-red-400 font-semibold hover:text-red-600 ${
          isBlinking ? "blink" : ""
        }`}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Очистить поле
      </button>
    );
  };
  // клик по ячейке
  const handleClick = (index) => {
    const boardsec = [...board];

    if (winner || boardsec[index]) return;

    boardsec[index] = IsNext ? "X" : "O";

    setBoard(boardsec);
    setIsNext(!IsNext);
    // if (boardsec.filter(Boolean).length === 8) {
    //     setIsDraw(true);
    //   }
  };

  useEffect(() => {
    if (winner) {
      const intervalId = setInterval(() => {
        //  обновляет состояние isBlinking, переключая его между true и false   
        setIsBlinking((prevState) => !prevState);
        // 
      }, 1000);

      return () => {
        //  очищает интервал  и setisblinking сбрасывает значение состояния
        clearInterval(intervalId);
        setIsBlinking(false);
      };
    }
  }, [winner]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col">
      <div>
        <h1 className="text-5xl font-semibold  font-sans tracking-wide">
          Tic Tac Hoe
        </h1>
      </div>
      <Board
        squares={board}
        click={handleClick}
        winningSquares={winningSquares}
      />
      {startNewGame()}

      <span className="px-2 text-red-700 text-md font-semibold">
      {!winner && "Next player: " + (IsNext ? "X" : "O")}
        {winner ? (
          <div className="text-4xl font-semibold text-red-700">
            ПОБЕДИТЕЛЬ: {winner}
          </div>
        ) : null}
      </span>
    </div>
  );
}
