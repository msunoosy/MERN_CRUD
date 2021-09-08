import { useState } from "react";
import "./App.css";

function App() {
  const [FoodName, setFoodName] = useState("");
  const [days, setdays] = useState(0);

  const listHandler = () => {
    console.log(FoodName + days);
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
        onChange={(e) => {
          setdays(e.target.value);
        }}
      ></input>
      <button onClick={listHandler}>Submit</button>
    </div>
  );
}

export default App;
