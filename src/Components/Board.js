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
  localStorage.setItem('data', Data);
  
  console.log(Data);
  return (
    <div>
      <div className="countryContainer">
        {Data.map((card, index) => (
          <Card className="cardCountry" country={card.country}
        //    />
    //     ))}
    //   </div>
    //   <div className="capitalContainer">
    //   {Data.map((card, index) => (
        // <Card 
        className="cardCapital" capital={card.capital} />
      ))}
      </div>
    </div>
  );
}
