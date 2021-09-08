import { React, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [FoodName, setFoodName] = useState("");
  const [days, setdays] = useState(0);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const listHandler = () => {
    axios.post("http://localhost:3001/insert", {
      FoodName: FoodName,
      days: days,
    });
  };

  return (
    <div className="App">
      <label>Food name</label>
      <input
        onChange={(e) => {
          setFoodName(e.target.value);
        }}
      ></input>
      <label>Days</label>
      <input
        type="number"
        onChange={(e) => {
          setdays(e.target.value);
        }}
      ></input>
      <button onClick={listHandler}>Submit</button>
      <div className="listwrapper">
        <h1>Food List</h1>
        {foodList.map((val, key) => {
          return (
            <div key={key}>
              <h1>{val.foodName}</h1> {"  "} <h1>{val.daysSinceIAte}</h1>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
