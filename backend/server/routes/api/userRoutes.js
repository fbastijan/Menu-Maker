const express = require("express");
const router = express.Router();

router.post("/user/register", (req, res) => {
  console.log("Hello" + req.body);
});
router.get("/user/login", (req, res) => {
  console.log("Hello Login");
});

module.exports = router;
