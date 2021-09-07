const express = require("express");
const mongoose = require("mongoose");
const Foodmodels = require("./models/Food");
const app = express();
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on 3001");
});

mongoose.connect(
  "mongodb+srv://user:root@cluster0.trhmt.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlparser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new Foodmodels({ foodName: "Orange", daysSinceIAte: 10 });
  try {
    await food.save();
    res.send("Data Inserted");
  } catch (err) {
    console.log(err);
  }
});
