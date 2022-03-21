const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskController = require("./controllers/taskControllers");
const app = express();
app.use(express.json());
app.use(cors());
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://shreevali:shreevali@cluster0.mhoxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

app.use("/tasks", taskController);
app.get("/*", (req, res) => {
  res.send("Error Page");
});
app.listen(3001, async (req, res) => {
  try {
    await connect();
    console.log("Hello from port 3001");
  } catch (e) {
    console.log(e.message);
  }
});
