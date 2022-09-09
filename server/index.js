var express = require("express");
var app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const { google } = require("googleapis");
require("dotenv").config();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000"
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/schedule", (req, res) => {
  const data = req.body;
});

app.listen(3001, (req, res) => {
  console.log("Server up and running at port 3001");
});
