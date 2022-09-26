const express = require("express");
const route = require("./routes/route");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Pankaj_:66Pbd7EVzng1k4jK@cluster0.wn2mrjr.mongodb.net/group7Database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.use((req, res, next) => {
  res.status(400).send({ status: false, error: "Enter proper Url" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});