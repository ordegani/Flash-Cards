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
const [add1, setadd1] = useState("");
const [add2, setadd2] = useState("");

  const Delete = (x) => {
    console.log(x.capital);
    setData(Data.filter((element) => element.capital !== x.capital));
    localStorage.setItem("data", Data);
    console.log(Data);
  };

  //TODO
  //try create delete function with splice()

  //TODO
  let country = "country";
  let capital = "capital";
  const Update = (e) => {
    //eventlistener
    e.preventDefault();
    country = (e.target.value);
   setadd1(country);
    console.log(Data);

    setData([...Data, {country:add1, capital:add2}])}
  

  // const Update2 = (e) => {
  //   e.preventDefault();
  //   capital = (e.target.value);
  //   setadd2(capital);
    // setData(Data.push({capital:capital}));
    // console.log(Data);}

    // setData([...Data, {country:add1,capital:add2}])
 

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
      <form onSubmit={Update}  className="search-form">
        <h1 className="smallTitle">LET'S PLAY!</h1>
        <input
          className="input"
          placeholder="Add country to your memory Cards"
          type="text"
          value={add1}
          onChange={Update}
        />
        <button className="search-button" type="Submit">
          Add
        </button>
        <input
          className="input2"
          placeholder="Add capital to your country"
          type="text"
          value={add2}
          onChange={Update}
        />
        <button className="search-button" type="Submit">
          Add
        </button>
      </form>
    </div>
  );
}
