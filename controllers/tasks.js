const TaskModel = require("../models/tasks");

module.exports.INSERT_TASK = (req, res) => {
    const task = new TaskModel({
        taskText: req.body.taskText,
        deadline: req.body.deadline,
        isCompleted: false,
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
            console.log("err"), err;
            res.status(500).json({ response: "Err in DB" });
        });
};

module.exports.GET_INCOMPLETED_TASKS = (req, res) => {
    TaskModel.find({ isCompleted: false })
        .then((response) => {
            res.status(200).json({ tasks: response });
        })
        .catch((err) => {
            console.log("err"), err;
            res.status(500).json({ response: "Err in DB" });
        });
};

module.exports.GET_TASK_BY_ID = (req, res) => {
    TaskModel.findOne({ _id: req.params.id })
        .then((response) => {
            res.status(200).json({ tasks: response });
        })
        .catch((err) => {
            console.log("err"), err;
            res.status(500).json({ response: "Err in DB" });
        });
};

module.exports.EDIT_COMPLETE_TASK_STATUS_BY_ID = (req, res) => {
    TaskModel.updateOne({ _id: req.params.id }, { isCompleted: true })
        .then((response) => {
            res.status(200).json({ tasks: response });
        })
        .catch((err) => {
            console.log("err"), err;
            res.status(500).json({ response: "Err in DB" });
        });
};

module.exports.DELETE_TASK_BY_ID = (req, res) => {
    TaskModel.deleteOne({ _id: req.params.id })
        .then((response) => {
            res.status(200).json({ response: response });
        })
        .catch((err) => {
            console.log("err"), err;
            res.status(500).json({ response: "Err in DB" });
        });
};