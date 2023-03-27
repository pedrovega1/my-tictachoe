import React from "react";
import Square from "./Square";
import "./board.css";
import "./winning-square.css"
export default function Board({squares,click,winningSquares}) {
  function renderSquare(i,winningSquares){
    
    const isWinningSquare = winningSquares.includes(i);
    const className = isWinningSquare ? 'square winning-square' : 'square';
    return(
      <button className={className} onClick={() => click(i)} key={i}>
      {squares[i]}
    </button>
    )
}
  return (
    <div className=" board flex flex-wrap ">
      {squares.map((square,i)=>(
        <Square key= {i} value ={square} onClick = {()=> click(i)}/>
     ))
     }
    </div>
  );
}
