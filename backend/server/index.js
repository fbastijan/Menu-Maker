const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const apiroutes = require("./routes/api/userRoutes");
app.use(cors());
app.use("/api", apiroutes);
app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

/*
1. ruta za login koja je get, ?usera saljem u headeru?
2. ruta za register koja je post
3. ruta koja kreira menu
4. ruta koja se poziva za povlačenje menu iz baze
Pitanje je kakvi će modeli biti?



*/
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
