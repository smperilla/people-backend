require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8000;
const peopleController = require("./controllers/peopleController");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the People App!");
});

app.use("/people", peopleController);

app.listen(PORT, () => console.log("Server is running on port", PORT));
