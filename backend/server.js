const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("./routers/studentRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// DB connection
mongoose.connect("mongodb://localhost:27017/studentDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/students", studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
