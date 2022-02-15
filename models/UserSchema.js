const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new mongoose.Schema({
  username: { type: String, required: true, minlength: 4, maxLength: 30 },
  password: { type: String, required: true, minlength: 5 },
});

module.exports = mongoose.model("User", User);
