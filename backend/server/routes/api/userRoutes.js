const express = require("express");
const router = express.Router();
const { client, connectToMongoDB } = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let email = req.body.email;
  let confirm_password = req.body.confirm_password;
  let username = req.body.username;

  try {
    const db = await connectToMongoDB();
    const collection = db.collection("user");

    if (password !== confirm_password) {
      return res.status(400).json({
        message: "not matching password",
      });
    }

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

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
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
          .catch((err) => {
            console.error("Error during user registration:", err);
            return res.status(500).json({
              msg: "Internal server error",
            });
          });
      });
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});
router.post("/login", async (req, res) => {
  const db = await connectToMongoDB();
  const collection = db.collection("user");

  collection.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({ msg: "user not found", success: false });
    }
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        //daj mu token
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
        };
        jwt.sign(payload, "secret", { expiresIn: 604800 }, (err, token) => {
          res.status(200).json({
            msg: "you are logged in",
            success: true,
            token: `bearer ${token}`,
          });
        });
      } else {
        return res.status(404).json({
          msg: "inncorrect password",
          success: false,
        });
      }
    });
  });
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