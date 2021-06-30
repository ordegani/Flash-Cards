import React from "react";

export default function Card({ country, capital, onClick, buttonText }) {
  return (
    <div className="card">
      <h1>{country}</h1>
      <h1>{capital}</h1>
      <button
        className="deleteBtn"
        onClick={() => onClick({ country, capital })}
        type="Submit"
      >
        {buttonText}
      </button>
    </div>
  );
}
