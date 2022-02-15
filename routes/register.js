const express = require("express");
const registerRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const path = require("path");

// REGISTER

registerRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

registerRouter.post("/", async (req, res) => {
  // Check if username exists in DB
  const usernameExist = await User.findOne({ username: req.body.username });
  if (!usernameExist) return res.status(400).send("Username already exists");

  //encrypting the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // create user with his login credentials
  const user = new User({
    username: req.body.username,
    password: hashPassword,
  });
  user.save();
  res.send(`${User.username} registered!`);
});

module.exports = registerRouter;
