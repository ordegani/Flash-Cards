import { useState } from "react";
import Card from "./Card";
import "./Board.css";

export default function Board() {
  const [Data, setData] = useState([
    { country: "Israel", capital: "Jerusalem" },
    { country: "England", capital: "London" },
    { country: "Russia", capital: "moscow" },
    { country: "Egypt", capital: "Cairo" },
    { country: "Japan", capital: "Tokio" },
  ]);

  Data.forEach((element) => {
    localStorage.setItem("country", element.country);
  });

  const Delete = (x) => {
    setData(Data.filter((element) => element.country !== x.country));
    localStorage.setItem("data", Data);
  };

  //TODO
  //try create delete function with splice()

  //TODO
  const update = ()=>{}


  return (
    <div class="flip-card">

<div class="flip-card-inner">
<div className="flip-card-front">
        {Data.map((card, index) => (
          <Card
          
            country={card.country}
            onClick={Delete}
            buttonText="DELETE"
          />
        ))}/</div>
        
        <div class="flip-card-back">
                {Data.map((card, index) => (
          <Card

            capital={card.capital}
            onClick={Delete}
            buttonText="DELETE"
          />
        ))}</div>
      
      </div>
    </div>
  );
                }