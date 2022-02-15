const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3002;
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const registerRouter = require("./routes/register");
const homeRouter = require("./routes/home");
const usersRouter = require("./routes/usersListed");

mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/register", registerRouter);

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
