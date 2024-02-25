const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const port = 3000;
const router = express.Router();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
const userRoutes = require("./routes/api/userRoutes");
const menuRoutes = require("./routes/api/menuRoutes");
const imageRoutes = require("./routes/api/imageRoutes");
router.use("/api", userRoutes);
router.use("/api", menuRoutes);
router.use("/api", imageRoutes);

router.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

/*
1. ruta za login koja je post, ?usera saljem u body?
2. ruta za register koja je post
3. ruta koja kreira menu
4. ruta koja se poziva za povlačenje menu iz baze
Pitanje je kakvi će modeli biti?



*/
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
