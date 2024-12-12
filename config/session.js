// config/session.js
const session = require("express-session");

const sessionConfig = {
  secret: process.env.SESSION_SECRET || "your-session-secret", // Secret key for signing sessions
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // Makes the cookie inaccessible to JavaScript (for security)
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    maxAge: 1000 * 60 * 60 * 24, // Session will expire after 1 day
  },
};

module.exports = sessionConfig;
