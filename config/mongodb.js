const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => console.log("Mongodb server is connected."));
mongoose.connection.on("error", () => console.log("Error: Mongodb server is not connected."));
