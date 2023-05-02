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
            console.log("response", response);
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
            console.log("response"), response;
            res.status(200).json({ tasks: response });
        })
        .catch((err) => {
            console.log("err"), err;
            res.status(500).json({ response: "Err in DB" });
        });
};