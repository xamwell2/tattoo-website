const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const sessionConfig = require("./config/session"); // From config/session.js
require("dotenv"); // Loads environment variables

const app = express();

// Database connection (MongoDB in this example)
const db = require("./config/db"); // From config/db.js

// Middleware setup
app.use(session(sessionConfig)); // Session management
app.use(express.static("assets")); // Serve static assets (images, etc.)
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Route definitions (basic example)
app.get("/", (req, res) => {
  res.send("Welcome to the tattoo portfolio site!");
});

app.get("/portfolio", (req, res) => {
  res.send("Portfolio Page");
});

// Other routes can go here...

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
