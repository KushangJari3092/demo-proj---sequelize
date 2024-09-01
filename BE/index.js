const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

require("./models");
const userController = require("./controllers/userController");

const app = express();
const port = 7000;

// Use CORS middleware
app.use(cors());

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.get("/query", userController.query);
app.get("/users", userController.getUsers);
app.get("/users/:id", userController.getUserById);
app.post("/users", userController.addUser);
app.delete("/users/:id", userController.deleteUser);
app.patch("/users/:id", userController.updateUser);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
