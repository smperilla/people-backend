require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => console.log("MongoDB connection is open"))
  .on("close", () => console.log("MongoDB connection is closed"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
