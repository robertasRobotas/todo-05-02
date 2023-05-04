const express = require("express");
const router = express.Router();
const {
  INSERT_TASK,
  GET_TASKS,
  GET_INCOMPLETED_TASKS,
  GET_TASK_BY_ID,
  EDIT_COMPLETE_TASK_STATUS_BY_ID,
  EDIT_TASK_TEXT_BY_ID,
  DELETE_TASK_BY_ID,
} = require("../controllers/tasks");

router.post("/task", INSERT_TASK);
router.get("/tasks", GET_TASKS);
router.get("/tasks/incompleted", GET_INCOMPLETED_TASKS);
router.get("/task/:id", GET_TASK_BY_ID);
router.put("/task/complete/:id", EDIT_COMPLETE_TASK_STATUS_BY_ID);
router.put("/task/text/:id", EDIT_TASK_TEXT_BY_ID);
router.delete("/task/:id", DELETE_TASK_BY_ID);

module.exports = router;
