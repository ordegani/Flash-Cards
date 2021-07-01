import { useState } from "react";
import Card from "./Card";
import './Board.css'

export default function Board() {
  const [Data, setData] = useState([
    { country: "Israel", capital: "Jerusalem" },
    { country: "England", capital: "London" },
    { country: "Russia", capital: "moscow" },
    { country: "Egypt", capital: "Cairo" },
    { country: "India", capital: "New Delhi" },
    { country: "Japan", capital: "Tokio" },
  ]);

  Data.forEach(element => {localStorage.setItem("country", element.country); 
  });
  
  const Delete = (x) => {
    setData(Data.filter((element) => element.country !== x.country));
    localStorage.setItem("data", Data);
  };
  
//TODO
//try create delete function withh splice()

  return (
    <div>
      <div className="container">
        {Data.map((card, index) => (
          <Card
            className="card"
            country={card.country}
            capital={card.capital}
            onClick={Delete}
            buttonText="DELETE"
          />
        ))}
      </div>
    </div>
  );
}
