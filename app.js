const express = require("express");
const app = express();
const middleware = require("./middleware");

// Set up static file serving for CSS
app.use(express.static("public"));

// Use EJS as the template engine (optional)
app.set("view engine", "ejs");
app.set("views", "views");

// Custom middleware to verify time (middleware.js)
app.use(middleware.verifyTime);

// Routes
app.get("/", (req, res) => {
  res.render("home"); // Render the home page (if using EJS)
});

app.get("/services", (req, res) => {
  res.render("services"); // Render the services page (if using EJS)
});

app.get("/contact", (req, res) => {
  res.render("contact"); // Render the contact page (if using EJS)
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
