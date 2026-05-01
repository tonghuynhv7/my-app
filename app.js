const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD no Docker huynh tong dep trai 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});