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

  const Update = (e) => {
    e.preventDefault();
    setadd1(e.target.value);
    console.log(e.target.value);
  };

  const Update2 = (e) => {
    e.preventDefault();
    setadd2(e.target.value);
    console.log(e.target.value);
  };

  const UpdateAll = () => {
    console.log(Data);
    // const add3 = add1.toString();
    // const add4 = add2.toString();
    setData([...Data, { country: add1, capital: add2 }]);
    console.log(add1, add2);
    Data.push({ country: add1, capital: add2 });
    setadd2("");
    setadd1("");
    console.log(Data);
  };
  //TODO
  useEffect(() => {
    UpdateAll();

  }, [Data])
  
  // const Update2 = (e) => {
  //   e.preventDefault();
  //   capital = (e.target.value);
  //   setadd2(capital);
  // setData(Data.push({capital:capital}));
  // console.log(Data);}

  // setData([...Data, {country:add1,capital:add2}])

  return (
    <div className="container">
      <form onSubmit={UpdateAll} className="search-form">
        <h1 className="smallTitle">LET'S PLAY!</h1>
        <input
          className="input"
          placeholder="Add country to your memory Cards"
          type="text"
          value={add1}
          onChange={Update}
        />

        {/* <button className="search-button" type="Submit">
          Add
        </button> */}

        <input
          className="input2"
          placeholder="Add capital to your country"
          type="text"
          value={add2}
          onChange={Update2}
        />
        <button className="search-button" type="Submit">
          Add
        </button>
      </form>

      <div className="flip-card">
        <div className="flip-card-inner">
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

          <div className="flip-card-back">
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
    </div>
  );
}
