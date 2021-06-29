import React from "react";
import Board from "./Board";

export default function Card({country, capital}) {
  return (
    <div className="card">
      <h1>{country}</h1>
      <h1>{capital}</h1>
    </div>
  );
}
