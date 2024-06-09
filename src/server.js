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

const start = async () => {
  const port = process.env.PORT || 3000;
  try {
    app.listen(3000, () => {
      console.log("Server is running on port 8000");
      connectDB();
    });
  } catch (e) {
    console.error(e);
  }
};

start();
