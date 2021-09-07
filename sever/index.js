const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://user:root@cluster0.trhmt.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlparser: true,
  }
);

app.listen(3001, () => {
  console.log("Server is running on 3001");
});
