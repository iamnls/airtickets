const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [];

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists." });
  }
  users.push({ email, password });
  res.json({ message: "Signup successful!" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ message: "Login successful!" });
  } else {
    res.status(400).json({ message: "Invalid credentials." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));