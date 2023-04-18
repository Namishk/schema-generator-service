require("dotenv").config();
const express = require("express");
const cors = require("cors");

// App object
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); //dev Build

// Import Routes
const generate = require("./routes/generate");

// Routes
app.use("/generate", generate);
module.exports = app;
