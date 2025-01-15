//============== IMPORTS==============
const express = require("express");
const cors = require("cors"); // Import CORS
const professionalRoute = require("./routes/professional");

const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// ROUTES
app.use(professionalRoute);

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

// SERVER LISTENER
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
