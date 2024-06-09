const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database.config");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const studentRouter = require("./routes/student.route");

// Use Routes
app.use("/student", studentRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Student Management System");
});

const start = async () => {
  const port = process.env.PORT || 3000;
  try {
    app.listen(port, () => {
      console.log(`SERVER IS RUNNING ON PORT ${port}`);
      connectDB();
    });
  } catch (e) {
    console.error(e);
  }
};

start();
