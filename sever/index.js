const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Foodmodel = require("./models/Food");
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log("Server is running on 3001");
});

mongoose.connect(
  "mongodb+srv://user:root@cluster0.trhmt.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlparser: true,
  }
);

app.post("/insert", async (req, res) => {
  const FoodName = req.body.FoodName;
  const days = req.body.days;
  const food = new Foodmodel({ foodName: FoodName, daysSinceIAte: days });
  try {
    await food.save();
    res.send("Data Inserted");
  } catch (err) {
    console.log(err);
  }
});
