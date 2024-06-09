const express = require("express");
const {
  SaveStudent,
  GetAllStudent,
} = require("../controller/student.controller");

const StudentRouter = express.Router();

StudentRouter.post("/save", SaveStudent);

StudentRouter.get("/get", GetAllStudent);

module.exports = StudentRouter;
