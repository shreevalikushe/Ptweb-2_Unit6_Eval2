const express = require("express");
const { off } = require("../models/task.model");
const Task = require("../models/task.model");

const router = express.Router();
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).send(task);
});
router.get("/", async (req, res) => {
  const page = req.query.page || 1;
  const pageSize = 3;
  let offset = (page - 1) * pageSize;
  const tasks = await Task.find().skip(offset).limit(pageSize);
  res.status(200).json(tasks);
});

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  let subTask = task.sub_task;
  res.status(200).json({ subTask });
});
router.delete("/:id", async (req, res) => {
  const deleteTask = await Task.findByIdAndDelete(req.params.id);
  res.send(deleteTask);
});

module.exports = router;
