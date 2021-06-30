import {useState} from "react";
import Card from "./Card";

export default function Board() {
    const [Data, setData] = useState([
        { country: "Israel", capital: "Jerusalem" },
        { country: "England", capital: "London" },
        { country: "Russia", capital: "moscow" },
        { country: "Egypt", capital: "Cairo" },
        { country: "India", capital: "New Delhi" },
      ]);
      localStorage.setItem('data', Data);
  console.log(Data);

//if Data was an array without objets in it:
//   const Delete = (card) => {
//     setData()
//     console.log(Data[1].country);}

// TOCOMPLETE:
    const Delete = (index) => {
        Data.splice(index, 1);
        // renderData();
        console.log(Data);
      };

  return (
    <div>
      <div className="countryContainer">
        {Data.map((card, index) => (
          <Card className="card" country={card.country}
        //    />
    //     ))}
    //   </div>
    //   <div className="capitalContainer">
    //   {Data.map((card, index) => (
        // <Card 
        // className="cardCapital" 
        capital={card.capital} 
        onClick ={Delete}
        buttonText="DELETE"/>
      ))}
      </div>
    </div>
  );
}
