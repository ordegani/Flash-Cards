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
      <div className="flip-card-inner">
        {Data.map((card, index) => (
          <Card
            className="flip-card-front"
            country={card.country}
            onClick={Delete}
            buttonText="DELETE"
          />
        ))}
                {Data.map((card, index) => (
          <Card
            className="flip-card-back"
            capital={card.capital}
            onClick={Delete}
            buttonText="DELETE"
          />
        ))}
      </div>
    </div>
  );
                }