const getAllTasks = (req, res) => {
  res.send('get all task')
}

const createTask = (req, res) => {
  res.send('create task')
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
