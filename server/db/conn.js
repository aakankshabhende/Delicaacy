const mongoose = require("mongoose");
const DB = process.env.DATABASE; // Connection String
mongoose.connect(DB, {
    // Database Connection
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successful Connection");
  })
  .catch((e) => {
    console.log("No connection");
  });
