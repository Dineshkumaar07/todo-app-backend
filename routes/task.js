const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.put("/", createTask);
router.get("/:userId", getAllTask);
router.put("/delete", deleteTask);
router.put("/update",updateTask)

module.exports = router;
