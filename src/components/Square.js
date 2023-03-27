import React from "react";
import "./square.css";
export default function Square(props) {
  
  return (
    <button onClick={props.onClick} className="square text-lg font-bold">
      {props.value}
    </button>
  );
}
 