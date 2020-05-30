const mongoose = require("mongoose");
let url =
  "mongodb+srv://luchito:maydayapp@cluster0-o5una.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(url);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongo connection error"));

module.exports = db;
