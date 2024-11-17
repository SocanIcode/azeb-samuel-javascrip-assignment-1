const express = require("express");
const app = express();
const path = require("path");

// Serve static files like HTML, CSS, and JS
app.use(express.static(path.join(__dirname, "public")));

// Route for checkout page
app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "checkout.html"));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
