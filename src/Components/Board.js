import React from "react";
import Card from "./Card";

export default function Board() {
  const Data = [
    { country: "Israel", capital: "Jerusalem" },
    { country: "England", capital: "London" },
    { country: "Russia", capital: "moscow" },
    { country: "Egypt", capital: "Cairo" },
    { country: "India", capital: "New Delhi" },
  ];
  return (
    <div>
      <div className="countryContainer">
        {Data.map((card, index) => (
          <Card country={card.country} />
        ))}
      </div>
      <div className="capitalContainer"></div>
      {Data.map((card, index) => {
        <Card capital={card.capital} />;
      })}
    </div>
  );
}
