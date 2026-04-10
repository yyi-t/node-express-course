const Task = require('../models/Task')

const getAllTasks = (req, res) => {
  res.send('get all task')
}

const createTask = async (req, res) => {
  // res.send('create task')
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

const getSingleTask = (req, res) => {
  console.log(req.params.id)
  res.send('get single task')
}

const updateTask = (req, res) => {
  res.send('update task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}
