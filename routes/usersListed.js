const express = require("express");
const usersRouter = express.Router();
const User = require("../models/UserSchema");

usersRouter.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

module.exports = usersRouter;
