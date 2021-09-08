import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [FoodName, setFoodName] = useState("");
  const [days, setdays] = useState(0);

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
    </div>
  );
}

export default App;
