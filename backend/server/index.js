const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
const apiroutes = require("./routes/api/userRoutes");
app.use("/api", apiroutes);
app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

/*
1. ruta za login koja je post, ?usera saljem u body?
2. ruta za register koja je post
3. ruta koja kreira menu
4. ruta koja se poziva za povlačenje menu iz baze
Pitanje je kakvi će modeli biti?



*/
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
