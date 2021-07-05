import { useState, useEffect } from "react";
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
    console.log(x.capital);
    setData(Data.filter((element) => element.capital !== x.capital));
    localStorage.setItem("data", Data);
    console.log(Data);
  };

  //TODO
  //try create delete function with splice()

  //TODO
  const Update = (e) => {
    e.preventDefault();
    const country = (e.target.value);
    setData(Data.push({country}));
    console.log(Data);
 
  };
  const Update2 = (e) => {
    e.preventDefault();
    const capital = (e.target.value);
    Data.push({ country: "Japan", capital: "Tokio" });
    console.log(Data);
 
  };

  return (
    <div className="container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div className="flip-card-front">
            {Data.map((card, index) => (
              <Card
                className="flip-card-front"
                country={card.country}
                onClick={Delete}
                buttonText="SHOW"
              />
            ))}
            /
          </div>

          <div class="flip-card-back">
            {Data.map((card, index) => (
              <Card 
                capital={card.capital}
                onClick={Delete}
                buttonText="DELETE"
              />
            ))}
          </div>
        </div>
      </div>
      <form onSubmit={Update} className="search-form">
        <h1 className="smallTitle">LET'S PLAY!</h1>
        <input
          className="input"
          placeholder="Add to your memory Cards"
          type="text"
          // value={addition}
          onChange={Update}
        />
        <button className="search-button" type="Submit">
          Add
        </button>
        <input
          className="input2"
          placeholder="Add to your memory Cards"
          type="text"
          // value={addition}
          onChange={Update2}
        />
        <button className="search-button" type="Submit">
          Add
        </button>
      </form>
    </div>
  );
}
