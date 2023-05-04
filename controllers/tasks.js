const TaskModel = require("../models/tasks");

module.exports.INSERT_TASK = (req, res) => {
  const task = new TaskModel({
    taskText: req.body.taskText,
    deadline: req.body.deadline,
    isCompleted: false,
    creationDate: new Date(),
  });

  task
    .save()
    .then((response) => {
      res.status(200).json({ response: "Task was successfully inserted" });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ response: "Error inserting a task into DB" });
    });
};

module.exports.GET_TASKS = (req, res) => {
  TaskModel.find()
    .then((response) => {
      res.status(200).json({ tasks: response });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ response: "Err in DB" });
    });
};

module.exports.GET_INCOMPLETED_TASKS = (req, res) => {
  TaskModel.find({ isCompleted: false })
    .then((response) => {
      res.status(200).json({ tasks: response });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ response: "Err in DB" });
    });
};

module.exports.GET_TASK_BY_ID = async (req, res) => {
  try {
    const task = await TaskModel.findOne({ _id: req.params.id });
    res.status(200).json({ tasks: task });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Err in DB" });
  }
};

module.exports.EDIT_COMPLETE_TASK_STATUS_BY_ID = async (req, res) => {
  try {
    const task = await TaskModel.findOne({ _id: req.params.id });

    const updateResponse = await TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      { isCompleted: !task.isCompleted },
      { new: true }
    );

    res.status(200).json({ tasks: updateResponse });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Err in DB" });
  }
};

module.exports.EDIT_TASK_TEXT_BY_ID = async (req, res) => {
  try {
    const updateResponse = await TaskModel.updateOne(
      { _id: req.params.id },
      { taskText: req.body.taskText }
    );

    res.status(200).json({ tasks: updateResponse });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Err in DB" });
  }
};

module.exports.DELETE_TASK_BY_ID = (req, res) => {
  TaskModel.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ response: "Err in DB" });
    });
};
