// config/db.js
const mongoose = require("mongoose");

// MongoDB connection string (can be found in MongoDB Atlas or your local MongoDB setup)
const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017";

// Connecting to MongoDB using Mongoose
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Exporting the connection to be used elsewhere in the app
module.exports = mongoose;
