const express = require("express");
const router = express.Router();
const db = require("../../database");

router.post("/register", async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let email = req.body.email;
  let confirm_password = req.body.confirm_password;
  let username = req.body.username;
  if (password !== confirm_password) {
    return res.status(400).json({
      message: "not matching password",
    });
  }
  const collection = db.collection("user");
  const foundUsername = await collection.findOne({ username: username });
  if (foundUsername) {
    console.log("User Already exists!");
    return res.status(400).json({
      msg: "Username is already taken",
    });
  }
  const foundEmail = await collection.findOne({ email: email });
  if (foundEmail) {
    console.log("Email Already exists!");
    return res.status(400).json({
      msg: "Email is already registered. Forgot your password?",
    });
  }
  let newUser = {
    name: name,
    username: username,
    password: password,
    email: email,
  };
  bycrypt.genSalt(10, (err, salt) => {
    bycrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      collection
        .insertOne(newUser)
        .then((user) => {
          return res.status(201).json({
            success: "true",
            msg: "pass encrypted",
          });
        })
        .catch(console.log("error"));
    });
  });
});
router.post("/login", (req, res) => {
  console.log(req.body.name);
  res.send("hello login");
});
router.delete("/logout", (req, res) => {
  console.log("Hello logout");
  res.send("hello logout");
});
router.get("/user", (req, res) => {
  console.log("Hello User");
  res.send("hello User");
});

module.exports = router;
