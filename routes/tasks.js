const express = require("express");
const router = express.Router();
const { INSERT_TASK, GET_TASKS } = require("../controllers/tasks");

router.post("/task", INSERT_TASK);
router.get("/tasks", GET_TASKS);

module.exports = router;