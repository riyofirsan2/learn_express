// Libraries
var express = require("express"); // import express framework

// additional libraries
var path = require("path"); // akses directory
var cookieParser = require("cookie-parser"); // akses cookies
var logger = require("morgan"); // nampilin log request server
const mongoose = require("mongoose"); // import library mongoose

var app = express(); // initialize app

// routing
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const homeRouter = require("./routes/Home");
const contactRouter = require("./routes/Contact");

// important
app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: false })); // url encoded, nested file false

// optionals
app.use(logger("dev")); // ngelog request server
app.use(cookieParser()); // cookie parser
app.use(express.static(path.join(__dirname, "public")));

// db configuration
mongoose.connect("mongodb://localhost/riyo", {
  // connect mongodb
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to mongoDB!");
});

// routing
app.use("/", indexRouter); // localhost:3000/
app.use("/users", usersRouter); // localhost:3000/users
app.use("/contact", contactRouter); // localhost:3000/contact

app.use("/home", homeRouter); // localhost:3000/home

module.exports = app;
