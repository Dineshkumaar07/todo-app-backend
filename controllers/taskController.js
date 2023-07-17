const userModel = require("../models/UserModel");
//create task
const createTask = async (req, res) => {
  try {
    const task = req.body.task;
    if (task.trim() === "") {
      res.json("invalid task");
      return;
    }
    const user = await userModel.findById(req.body.userId);
    await user.tasks.push(task);
    await user.save();
    res.json({ tasks: user.tasks });
  } catch (error) {
    res.json(error);
  }

  // const newTask = await taskModel.create(req.body);
};

//get all task
const getAllTask = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.params.userId });
    res.json(user.tasks);
  } catch (error) {
    res.json(error);
  }
  // const tasks = await taskModel.find({});
};

//Delete a task ie Completed :
const deleteTask = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    await user.tasks.splice(req.body.index, 1);
    await user.save();
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

//update Task
const updateTask = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    const index = req.body.index;
    const currentTask = user.tasks[index];
    user.tasks.forEach((element, index) => {
      if (element === currentTask) {
        user.tasks[index] = req.body.updatedTask;
      }
    });
    await user.save()
    res.json(user.tasks)
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { createTask, getAllTask, deleteTask ,updateTask};
