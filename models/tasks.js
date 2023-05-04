const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskText: { type: String, required: true, min: 3 },
  deadline: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
  creationDate: { type: Date, required: true },
});

module.exports = mongoose.model("Task", taskSchema);
